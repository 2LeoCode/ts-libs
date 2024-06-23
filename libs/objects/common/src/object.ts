import { filter, filterUndefined, merge } from "./internal";

declare global {
  interface ObjectConstructor {
    filter: typeof filter;
    filterUndefined: typeof filterUndefined;
    merge: typeof merge;
  }
}

Object.assign(Object, {
  filter,
  filterUndefined,
  merge,
});
