import type { NhenHandler } from "#/handler/nhen";
import type { Command } from "#/lib/command";
import type { Ctx } from "#/lib/ctx";

import { BaseInteraction, MessageFlags } from "discord.js";

export class InteractionCreate {
  ctx: Ctx;
  commandsPair: Record<string, Command>;
  nhenHandler: NhenHandler;

  constructor(opts: { ctx: Ctx; commandsPair: Record<string, Command>; nhenHandler: NhenHandler }) {
    this.ctx = opts.ctx;
    this.commandsPair = opts.commandsPair;
    this.nhenHandler = opts.nhenHandler;
  }

  async handler(interaction: BaseInteraction) {
    if (interaction.isChatInputCommand()) {
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
    } else if (interaction.isButton()) {
      this.nhenHandler.handleNHenButtonInteraction({ interaction });
    }
  }
}
