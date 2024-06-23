import { OmitByValue } from "@ts-libs/libs-types-common";

export function filterUndefined<T extends Record<string, any>>(
  object: T,
): OmitByValue<T, undefined> {
  Object.entries(object).forEach(([key, value]) => {
    if (value === undefined) delete object[key];
  });
  return object;
}
