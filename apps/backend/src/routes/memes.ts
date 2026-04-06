import { createApp } from "#/app";
import { env } from "#/env";
import { createRoute, z } from "@hono/zod-openapi";
import db, { eq, or, inArray, selectMemesSchema } from "@repo/db";
import { sign, verify } from "hono/jwt";

const ResponseSchema = z.array(selectMemesSchema);

const QuerySchema = z.object({
  meme_ids_token: z.string().optional(),
});

const route = createRoute({
  method: "get",
  path: "/",
  request: {
    query: QuerySchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ResponseSchema,
        },
      },
      description: "Memes key and value",
    },
  },
});

const JsonSchemaToken = z.object({
  meme_ids: z.array(z.number()),
});

const ResponseSchemaToken = z.object({
  token: z.string(),
});

const routeToken = createRoute({
  method: "post",
  path: "/token",
  request: {
    body: {
      content: {
        "application/json": {
          schema: JsonSchemaToken,
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ResponseSchemaToken,
        },
      },
      description: "Token to get list of memes",
    },
    401: {
      description: "Unauthorized",
    },
  },
});

const decodedPayloadSchema = z.object({
  meme_ids: z.array(z.number()),
  exp: z.number(),
});

const memesApp = createApp();

memesApp.openapi(route, async (c) => {
  const { discord_user_id } = c.get("jwtPayload");
  const { meme_ids_token } = QuerySchema.parse(c.req.query());
  let decoded;
  try {
    decoded = await verify(meme_ids_token ?? "", env.SECRET_KEY, { alg: "HS256" });
  } catch {
    decoded = null;
  }

  const parsedDecodedPayload = decodedPayloadSchema.safeParse(decoded);
  let meme_ids: number[] = [];
  if (parsedDecodedPayload.success) {
    meme_ids = parsedDecodedPayload.data.meme_ids;
  }

  const memes = await db.query.meme.findMany({
    where: (fields, { eq, or, inArray }) => {
      return or(eq(fields.discord_user_id, discord_user_id), inArray(fields.id, meme_ids));
    },
  });

  return c.json(memes, 200);
});

memesApp.openapi(routeToken, async (c) => {
  const { admin } = c.get("jwtPayload");

  if (!admin) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const { meme_ids } = JsonSchemaToken.parse(await c.req.valid("json"));

  const payload = {
    meme_ids,
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  };
  const token = await sign(payload, env.SECRET_KEY);

  return c.json({ token }, 200);
});

export { memesApp };
