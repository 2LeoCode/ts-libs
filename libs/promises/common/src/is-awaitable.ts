export function isAwaitable(value: object): value is PromiseLike<object> {
  return "then" in value && typeof value.then == "function";
}
