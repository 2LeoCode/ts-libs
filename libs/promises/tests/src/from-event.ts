import { describe, it } from "node:test";
import assert from "node:assert";
import { EventEmitter } from "node:stream";
import "@ts-libs/libs-promises-common";
import type { OneTimeListener } from "@ts-libs/libs-events-common";

describe("fromEvent", () => {
  it("should turn an event listener into a promise", async () => {
    const emitter: EventEmitter &
      OneTimeListener<{
        foo(foo: number, bar: string): void;
      }> = new EventEmitter();
    const p = Promise.fromEvent(emitter, "foo");
    assert.ok(p instanceof Promise);
    emitter.emit("foo", 42, "hello");
    assert.deepStrictEqual(await p, [42, "hello"]);
  });
});
