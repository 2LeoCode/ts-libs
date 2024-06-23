import { PromiseExecutor } from "./executor";
import {
  from,
  fromEvent,
  fromStream,
  fromCallback,
  withResolvers,
} from "./internal";

export function promise<T, Err = Error>(
  executor: PromiseExecutor<T, Err> = () => {},
): Promise<T> {
  return new Promise(executor);
}

declare global {
  interface PromiseConstructor {
    from: typeof from;
    fromEvent: typeof fromEvent;
    fromStream: typeof fromStream;
    fromCallback: typeof fromCallback;
    withResolvers: typeof withResolvers;
  }
}

Object.assign(Promise, {
  from,
  fromEvent,
  fromStream,
  fromCallback,
  withResolvers,
});
