import { env } from "#/env";
import { REST } from "@discordjs/rest";
import { Routes, type APIUser } from "discord-api-types/v10";
export const rest = new REST({ version: "10" }).setToken(env.DISCORD_TOKEN);

const userStorage = new Map<string, APIUser>();

export async function getUser({
  discord_user_id,
}: {
  discord_user_id: string;
}) {
  let user = userStorage.get(discord_user_id);
  if (user) return user;
  user = (await rest.get(Routes.user(discord_user_id))) as APIUser;
  userStorage.set(discord_user_id, user);
  return user;
}

export async function getUsers({
  discord_user_ids,
}: {
  discord_user_ids: string[];
}) {
  const discord_users: APIUser[] = [];
  for (const discord_user_id of discord_user_ids) {
    discord_users.push(await getUser({ discord_user_id }));
  }
}
