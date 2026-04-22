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
  .regex(/^[a-zA-Z0-9_\-.]+$/);

export const zTagImport = z.array(z.object({ key: zTagKey, value: z.string() }));
