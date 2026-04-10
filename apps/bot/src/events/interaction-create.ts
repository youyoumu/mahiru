import type { NhenHandler } from "#/handler/nhen";
import type { Command } from "#/lib/command";
import type { Ctx } from "#/lib/ctx";
import type { Logger } from "pino";

import { BaseInteraction, MessageFlags } from "discord.js";

export class InteractionCreate {
  ctx: Ctx;
  log: Logger;
  commandsPair: Record<string, Command>;
  nhenHandler: NhenHandler;

  constructor(opts: {
    ctx: Ctx;
    log: Logger;
    commandsPair: Record<string, Command>;
    nhenHandler: NhenHandler;
  }) {
    this.ctx = opts.ctx;
    this.log = opts.log;
    this.commandsPair = opts.commandsPair;
    this.nhenHandler = opts.nhenHandler;
  }

  async handler(interaction: BaseInteraction) {
    const username = interaction.user.username;
    const guildName = interaction.guild?.name;
    const guildPreview = guildName ? `[${guildName}] ` : "";

    const isChatInputCommand = interaction.isChatInputCommand();
    const isButton = interaction.isButton();
    const interactionType = () => {
      if (isChatInputCommand) return "ChatInputCommand";
      if (isButton) return "Button";
      return "Unknown";
    };

    this.log.trace(`${guildPreview}${username}: ${interactionType()}`);

    if (isChatInputCommand) {
      const command = this.commandsPair[interaction.commandName];
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
    } else if (isButton) {
      this.nhenHandler.handleNHenButtonInteraction({ interaction });
    }
  }
}
