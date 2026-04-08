import type { Ctx } from "#/lib/ctx";

import type { Command, CommandProto } from "./Command";

import { Help } from "./help";
import { Login } from "./login";
import { Meme } from "./meme";
import { Ping } from "./ping";
import { Prefix } from "./prefix";

export * from "./help";
export * from "./login";
export * from "./meme";
export * from "./ping";
export * from "./prefix";

export const commandProtos = {
  [Ping.data.name]: Ping,
  [Meme.data.name]: Meme,
  [Login.data.name]: Login,
  [Prefix.data.name]: Prefix,
  [Help.data.name]: Help,
} satisfies Record<string, CommandProto>;

export function createCommandsPair(ctx: Ctx): Record<string, Command> {
  return Object.fromEntries(
    Object.entries(commandProtos).map(([name, CommandCtor]) => [name, new CommandCtor({ ctx })]),
  );
}
