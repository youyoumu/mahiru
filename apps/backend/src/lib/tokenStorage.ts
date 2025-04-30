export const tokenStorage = new Map();

export function storeToken({
  token,
  user_id,
}: {
  token: string;
  user_id: string;
}) {
  tokenStorage.set(token, user_id);
}

export function consumeToken(token: string): string | undefined {
  const user_id = tokenStorage.get(token);
  if (user_id) tokenStorage.delete(token); // Single-use
  return user_id;
}
