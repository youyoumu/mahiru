import { BaseInteraction, Events, MessageFlags } from "discord.js";
import commands from "../commands";
import { handleNHenButtonInteraction } from "#/feature/nhen";

export default {
  name: Events.InteractionCreate as const,
  async execute(interaction: BaseInteraction) {
    if (interaction.isChatInputCommand()) {
      const command = commands[interaction.commandName];
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
  },
};
