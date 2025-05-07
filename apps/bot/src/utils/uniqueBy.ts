// Generic function for filtering unique items by a key
export function uniqueBy<T, K>(array: T[], keySelector: (item: T) => K): T[] {
  return array.filter(
    (item, index, self) =>
      index === self.findIndex((i) => keySelector(i) === keySelector(item)),
  );
}
