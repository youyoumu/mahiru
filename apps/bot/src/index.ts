// Require the necessary discord.js classes
import { Client, Collection, GatewayIntentBits } from "discord.js";
import { env } from "./env";
import ping from "./commands/utility/ping";
import interactionCreate from "./events/interactionCreate";
import ready from "./events/ready";

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

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
const events = [interactionCreate, ready];

for (const command of commandArray) {
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      "some command is missing a required 'data' or 'execute' property",
    );
  }
}

for (const event of events) {
  if (event.once) {
    client.once(event.name as any, (interaction) => event.execute(interaction));
  } else {
    client.on(event.name as any, (interaction) => {
      event.execute(interaction);
    });
  }
}
