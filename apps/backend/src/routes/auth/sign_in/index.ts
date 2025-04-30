import { createApp } from "#/app";
import { consumeToken } from "#/lib/tokenStorage";
import { describeRoute } from "hono-openapi";
import { resolver, validator } from "hono-openapi/valibot";
import { object, optional, string, type InferOutput } from "valibot";
import { createJwtToken } from "#/lib/jwt";
import { env } from "#/env";

const responseSchema = object({
  token: string(),
});

const requestSchema = object({
  one_time_token: optional(string()),
  secret_key: optional(string()),
});

export default createApp().post(
  "/",
  describeRoute({
    description: "Login with one_time_token or secret_key",
    responses: {
      200: {
        description: "JWT token",
        content: {
          "application/json": {
            schema: resolver(responseSchema),
          },
        },
      },
    },
  }),
  validator("json", requestSchema),
  async (c) => {
    const { one_time_token, secret_key } = c.req.valid("json");

    if (secret_key) {
      if (secret_key !== env.SECRET_KEY) {
        return c.body(null, 401);
      }

      const token = await createJwtToken({
        discord_user_id: "doesntmatter",
        secret_key,
      });
      return c.json<InferOutput<typeof responseSchema>>({
        token,
      });
    }

    const discord_user_id = consumeToken(one_time_token ?? "");

    if (discord_user_id) {
      const token = await createJwtToken({
        discord_user_id,
        secret_key,
      });

      return c.json<InferOutput<typeof responseSchema>>({
        token,
      });
    }

    return c.json(
      {
        error: "invalid one time token",
      },
      401,
    );
  },
);
