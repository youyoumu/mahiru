export function unique<T extends string | number>(arr: T[]): T[] {
  return [...new Set(arr)];
}
