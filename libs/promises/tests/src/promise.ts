import { describe, it } from "node:test";
import assert from "assert";
import { promise } from "@ts-libs/libs-promises-common";

describe("promise", () => {
  it("should create a new instance of Promise", () => {
    const p = promise<number>();
    assert.ok(p instanceof Promise);
  });
  it("should create a new instance of Promise that resolves", async () => {
    const p = promise<number>((res) => res(42));
    assert.ok(p instanceof Promise);
    assert.strictEqual(await p, 42);
  });
  it("should create a new instance of Promise that rejects", async () => {
    const p = promise<number, string>((_, rej) => rej("oops"));
    assert.ok(p instanceof Promise);
    assert.strictEqual(await p.catch((err) => err), "oops");
  });
});
