import { createApp } from "#/app";
import { describeRoute } from "hono-openapi";
import { resolver, validator } from "hono-openapi/valibot";
import {
  array,
  number,
  object,
  optional,
  parse,
  safeParse,
  string,
  type InferOutput,
} from "valibot";
import db, { valibot } from "@repo/db";
import { sign, verify } from "hono/jwt";
import { env } from "#/env";

const responseSchema = array(valibot.selectMemesSchema);
const querySchema = object({
  meme_ids_token: optional(string()),
});
const app = createApp();

const decodedPayloadSchema = object({
  meme_ids: array(number()),
  exp: number(),
});

const route = createApp().get(
  "/",
  describeRoute({
    description: "Get all user's memes collections",
    responses: {
      200: {
        description: "Memes key and value",
        content: {
          "application/json": {
            schema: resolver(responseSchema),
          },
        },
      },
    },

    validateResponse: true,
  }),
  validator("query", querySchema),
  async (c) => {
    const { discord_user_id } = c.get("jwtPayload");
    const meme_ids_token = c.req.valid("query")?.meme_ids_token;
    const decoded = meme_ids_token
      ? await verify(meme_ids_token, env.SECRET_KEY)
      : null;

    const parsedDecodedPayload = safeParse(decodedPayloadSchema, decoded);
    let meme_ids: number[] = [];
    if (parsedDecodedPayload.success) {
      meme_ids = parsedDecodedPayload.output.meme_ids;
    }

    const memes = await db.query.meme.findMany({
      where(fields, { eq, or, inArray }) {
        return or(
          eq(fields.discord_user_id, discord_user_id),
          inArray(fields.id, meme_ids),
        );
      },
    });

    const data = parse(
      responseSchema,
      memes.map((meme) => {
        return meme;
      }),
    );

    return c.json<InferOutput<typeof responseSchema>>(data);
  },
);

const responseSchemaToken = object({
  token: string(),
});
const jsonSchemaToken = object({
  meme_ids: array(number()),
});

const routeToken = createApp().post(
  "/token",
  describeRoute({
    description: "Generate token to get list of memes",
    responses: {
      200: {
        description: "Token to get list of memes",
        content: {
          "application/json": {
            schema: resolver(responseSchemaToken),
          },
        },
      },
    },

    validateResponse: true,
  }),
  validator("json", jsonSchemaToken),
  async (c) => {
    const { admin } = c.get("jwtPayload");

    if (!admin) {
      return c.body(null, 401);
    }

    const { meme_ids } = c.req.valid("json");

    const payload = {
      meme_ids,
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // Token expires in 60 minutes
    };
    const token = await sign(payload, env.SECRET_KEY);

    return c.json<InferOutput<typeof responseSchemaToken>>({ token });
  },
);

export default app.route("/", route).route("/", routeToken);
