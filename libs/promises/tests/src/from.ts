import { describe, it } from "node:test";
import assert from "node:assert";
import "@ts-libs/libs-promises-common";

describe("from", () => {
  it("should turn a value into a promise that resolves into that value", async () => {
    const p = Promise.from(42);
    assert.ok(p instanceof Promise);
    assert.strictEqual(await p, 42);
  });
});
