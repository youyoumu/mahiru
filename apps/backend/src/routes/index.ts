import app from "#/app";
import { describeRoute } from "hono-openapi";
import { resolver, validator } from "hono-openapi/valibot";
import { object, string } from "valibot";

const responseSchema = object({
  name: string(),
});

const querySchema = object({
  name: string(),
});

app.get(
  "/",
  describeRoute({
    description: "Say hello to the user",
    responses: {
      200: {
        description: "Successful greeting response",
        content: {
          "application/json": {
            schema: resolver(responseSchema),
          },
        },
      },
    },
  }),
  validator("query", querySchema),
  (c) => {
    return c.json({ namee: "asd" });
  },
);
