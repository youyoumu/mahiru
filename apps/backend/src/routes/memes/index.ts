import { createApp } from "#/app";
import { describeRoute } from "hono-openapi";
import { resolver } from "hono-openapi/valibot";
import { array, string, type InferOutput } from "valibot";
import db from "@repo/db";

const responseSchema = array(string());

export default createApp().get(
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
  }),
  async (c) => {
    const { discord_user_id } = c.get("jwtPayload");
    const memes = await db.query.meme.findMany({
      where(fields, { eq }) {
        return eq(fields.discord_user_id, discord_user_id);
      },
    });
    return c.json<InferOutput<typeof responseSchema>>(
      memes.map((meme) => meme.key + ":" + meme.value),
    );
  },
);
