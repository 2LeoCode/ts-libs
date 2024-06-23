import { describe, it } from "node:test";
import assert from "node:assert";
import { throwError } from "@ts-libs/libs-errors-common";

describe("throwError", () => {
  it("should throw a new instance of Error", async () => {
    const err = await (async () => throwError("foo"))().catch((err) => err);
    assert.ok(err instanceof Error);
    assert.strictEqual(err.name, "Error");
    assert.strictEqual(err.cause, undefined);
    assert.ok(typeof err.stack === "string");
    assert.strictEqual(err.message, "foo");
  });
  it("should throw a new instance of Error with the specified cause", async () => {
    const err = await (async () => throwError("foo", { cause: "bar" }))().catch(
      (err) => err,
    );
    assert.ok(err instanceof Error);
    assert.strictEqual(err.name, "Error");
    assert.strictEqual(err.cause, "bar");
    assert.ok(typeof err.stack === "string");
    assert.strictEqual(err.message, "foo");
  });
});
