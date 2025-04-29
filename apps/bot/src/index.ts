// Require the necessary discord.js classes
import {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  MessageFlags,
} from "discord.js";
import { env } from "./env";
import ping from "./commands/utility/ping";

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(env.DISCORD_TOKEN);

const commands = new Collection();
// Extend the Client interface
declare module "discord.js" {
  interface Client {
    commands: Collection<unknown, unknown>;
  }
}

client.commands = commands;

const commandArray = [ping];

for (const command of commandArray) {
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      "some command is missing a required 'data' or 'execute' property",
    );
  }
}

client.on(Events.InteractionCreate, async (interaction) => {
  console.log(interaction);
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(
    interaction.commandName,
  ) as typeof ping;

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

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
});
