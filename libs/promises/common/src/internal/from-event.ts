import type {
  OneTimeListener,
  DefaultEventMap,
} from "@ts-libs/libs-events-common";
import { promise } from "../promise";

export function fromEvent<
  EventMap extends DefaultEventMap,
  Event extends keyof EventMap,
>(
  listener: OneTimeListener<EventMap>,
  event: Event,
): Promise<Parameters<EventMap[Event]>> {
  return promise((resolve) => {
    listener.once(event, <EventMap[Event]>(
      ((...args: Parameters<EventMap[Event]>) => resolve(args))
    ));
  });
}
