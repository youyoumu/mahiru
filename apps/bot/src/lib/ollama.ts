import { env } from "#/env";

export const ollama = {
  completion: async (model: string, messages: unknown[]) => {
    const url = new URL(env.OLLAMA_URL);
    url.pathname = "v1/chat/completions";
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    if (env.REVERSE_PROXY_KEY) headers.set("Reverse-Proxy-Key", env.REVERSE_PROXY_KEY);
    return await fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify({ model, messages }),
    });
  },
  health: async () => {
    const url = new URL(env.OLLAMA_URL);
    return await fetch(url);
  },
};
