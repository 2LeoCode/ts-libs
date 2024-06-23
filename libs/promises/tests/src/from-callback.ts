import { describe, it } from "node:test";
import assert from "node:assert";
import "@ts-libs/libs-promises-common";

describe("fromCallback", () => {
  it("should turn a function that takes a callback as its last argument to a promise that resolves when the callback is called", async () => {
    function foo(
      name: string,
      callback: (name: string, magicNumber: number) => void,
    ) {
      callback(name + "_name", 42);
    }

    const p = Promise.fromCallback(foo, "hello");
    assert.ok(p instanceof Promise);
    assert.deepStrictEqual(await p, ["hello_name", 42]);
  });
});
