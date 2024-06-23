import type { Resolver } from "./resolver";

export type PromiseExecutor<T, Err> = (
  resolve: Resolver<T>,
  reject: Resolver<Err>,
) => void;
