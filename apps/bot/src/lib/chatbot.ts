/**
 * Utility for generating and detecting chat clear tokens.
 * Tokens are embedded in spoiler syntax to hide them from normal view.
 */

const CLEAR_TOKEN_PATTERN = /\|\|clear:(\d+):clear\|\|/;

/**
 * Generates a unique chat clear token using timestamp.
 */
export function generateClearToken(): string {
  const timestamp = Date.now();
  return `clear:${timestamp}:clear`;
}

/**
 * Formats a clear token with spoiler syntax for display.
 */
export function formatClearToken(token: string): string {
  return `||${token}||`;
}

/**
 * Checks if a message content contains a chat clear token.
 */
export function hasClearToken(content: string): boolean {
  return CLEAR_TOKEN_PATTERN.test(content);
}
