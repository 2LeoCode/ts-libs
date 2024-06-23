import { DefaultEventMap } from "./default-event-map";

export type OneTimeListener<EventMap extends DefaultEventMap> = {
  once<Event extends keyof EventMap>(
    event: Event,
    handler: EventMap[Event],
  ): OneTimeListener<EventMap>;
};
