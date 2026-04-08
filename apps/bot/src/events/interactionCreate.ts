import type { Command } from "#/commands/Command";
import type { Ctx } from "#/lib/ctx";

import { handleNHenButtonInteraction } from "#/feature/nhen";
import { BaseInteraction, MessageFlags } from "discord.js";

export const interactionCreate = async (
  ctx: Ctx,
  commandsPair: Record<string, Command>,
  interaction: BaseInteraction,
) => {
  if (interaction.isChatInputCommand()) {
    const command = commandsPair[interaction.commandName];
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "There was an error while executing this command!",
          flags: MessageFlags.Ephemeral,
        });
      } else {
        await interaction.reply({
          content: "There was an error while executing this command!",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
  } else if (interaction.isButton()) {
    handleNHenButtonInteraction({
      interaction,
    });
  }
};
