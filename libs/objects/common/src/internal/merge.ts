import type { OmitByValue } from "@ts-libs/libs-types-common";
import { filterUndefined } from "./filter-undefined";

export function merge<
  Dst extends Record<string, any>,
  Src extends Record<string, any>,
>(dst: Dst, src: Src): Dst & OmitByValue<Src, undefined> {
  return Object.assign(dst, filterUndefined(src));
}
