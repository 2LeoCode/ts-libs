export type ObjectFilterPredicate = (key: string, value: unknown) => boolean;

export function filter<T extends Record<string, any>>(
  object: T,
  predicate: ObjectFilterPredicate,
): Partial<T> {
  Object.entries(object).forEach(([key, value]) => {
    if (!predicate(key, value)) delete object[key];
  });
  return object;
}
