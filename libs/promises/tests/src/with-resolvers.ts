import { describe, it } from "node:test";
import assert from "node:assert";

describe("withResolvers", () => {
  it("should return a promise along with its resolver functions", async () => {
    let [p, resolve, reject] = Promise.withResolvers<string>();
    assert.ok(p instanceof Promise);
    resolve("hello");
    assert.strictEqual(await p, "hello");

    [p, resolve, reject] = Promise.withResolvers<string>();
    assert.ok(p instanceof Promise);
    p = p.catch((err) => err.message);
    reject(new Error("hello"));
    assert.strictEqual(await p, "hello");
  });
});
