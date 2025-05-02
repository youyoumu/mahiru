import { env } from "#/env";
import { REST } from "@discordjs/rest";
import { Routes, type APIUser } from "discord-api-types/v10";
export const rest = new REST({ version: "10" }).setToken(env.DISCORD_TOKEN);

export async function getUser({
  discord_user_id,
}: {
  discord_user_id: string;
}) {
  return (await rest.get(Routes.user(discord_user_id))) as APIUser;
}
