import app from "#/app";
import { tokenStorage } from "#/lib/tokenStorage";
import { describeRoute } from "hono-openapi";
import { resolver, validator } from "hono-openapi/valibot";
import { nanoid } from "nanoid";
import { object, string, type InferOutput } from "valibot";

const responseSchema = object({
  discord_user_id: string(),
  token: string(),
});

const requestSchema = object({
  discord_user_id: string(),
});

app.post(
  "/auth/token",
  describeRoute({
    description: "Get one time token for login",
    responses: {
      200: {
        description: "One time token for login for the provided user_id",
        content: {
          "application/json": {
            schema: resolver(responseSchema),
          },
        },
      },
    },
  }),
  validator("json", requestSchema),
  (c) => {
    const { discord_user_id } = c.req.valid("json");
    const token = nanoid();
    tokenStorage.set(token, discord_user_id);
    return c.json<InferOutput<typeof responseSchema>>({
      discord_user_id,
      token,
    });
  },
);
