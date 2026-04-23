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
      command.execute(interaction).catch((err) => {
        this.log.error(err);
        const interactionRes = {
          content: "There was an error while executing this command!",
          flags: MessageFlags.Ephemeral,
        } as const;
        if (interaction.replied || interaction.deferred) {
          interaction.followUp(interactionRes).catch((err) => {
            this.log.error(err);
          });
        } else {
          interaction.reply(interactionRes).catch((err) => {
            this.log.error(err);
          });
        }
      });
    } else if (isButton) {
      Object.values(this.commandsPair).forEach((command) => {
        command.handleButtonInteraction(interaction).catch((err) => {
          this.log.error(err);
        });
      });

      this.nhenHandler.handleInteraction({ interaction }).catch((err) => {
        this.log.error(err);
      });
    }
  }
}
