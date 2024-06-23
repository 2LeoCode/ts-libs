import { DefaultEventMap } from "./default-event-map";

export type Listener<EventMap extends DefaultEventMap> = {
  on<Event extends keyof EventMap>(
    event: Event,
    handler: EventMap[Event],
  ): Listener<EventMap>;
};
