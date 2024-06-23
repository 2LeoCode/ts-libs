import { Resolver, PromiseWithResolvers } from "../resolver";
import { promise } from "../promise";

export function withResolvers<T, Err = Error>(): PromiseWithResolvers<T, Err> {
  let resolve: Resolver<T>;
  let reject: Resolver<Err>;
  const p = promise<T, Err>((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });

  return [p, resolve!, reject!];
}
