import { z } from "zod";

export const zDigits = z.string().regex(/^\d+$/);

export const zCompletionResponse = z.object({
  id: z.string(),
  created: z.number(),
  model: z.string(),
  object: z.literal("chat.completion"),
  choices: z.array(
    z.object({
      index: z.number(),
      logprobs: z.null(), // Change to z.any() if you expect logprob data later
      finish_reason: z.string(),
      message: z.object({
        role: z.string(),
        content: z.string(),
        reasoning_content: z.string().optional(),
      }),
    }),
  ),
  usage: z.object({
    input_tokens: z.number(),
    output_tokens: z.number(),
    total_tokens: z.number(),
    prompt_tokens: z.number(),
    completion_tokens: z.number(),
    "response_token/s": z.number(),
    "prompt_token/s": z.number(),
    total_duration: z.number(),
    load_duration: z.number(),
    prompt_eval_count: z.number(),
    prompt_eval_duration: z.number(),
    eval_count: z.number(),
    eval_duration: z.number(),
    approximate_total: z.string(),
    completion_tokens_details: z.object({
      reasoning_tokens: z.number(),
      accepted_prediction_tokens: z.number(),
      rejected_prediction_tokens: z.number(),
    }),
  }),
});

export const zTagKey = z
  .string()
  .min(1)
  .max(32)
  .regex(/^[\x21-\x7E]+$/);

export const zTagImport = z.array(z.object({ key: zTagKey, value: z.string() }));

export const zNotSoBotTag = z.object({
  assets: z.array(z.any()),
  content: z.string(),
  created: z.string(),
  edited: z.string().nullable(),
  guild_id: z.string(),
  id: z.string(),
  is_command: z.boolean(),
  is_on_directory: z.boolean(),
  last_used: z.string().nullable(),
  locked: z.boolean(),
  name: z.string(),
  nsfw: z.boolean(),
  reference_tag: z.string().nullable(),
  scanned: z.number(),
  server_id: z.string(),
  user: z.object({
    avatar: z.string(),
    blocked: z.boolean(),
    blocked_on: z.string().nullable(),
    blocked_reason: z.string().nullable(),
    bot: z.boolean(),
    discriminator: z.string(),
    flags: z.number(),
    id: z.string(),
    username: z.string(),
  }),
  uses: z.number(),
});

export const zNotSoBotTagExport = z.object({
  options: z.object({
    userId: z.string(),
  }),
  serverId: z.string(),
  tags: z.array(zNotSoBotTag),
  timestamp: z.number(),
});
