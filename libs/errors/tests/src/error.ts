import { error } from "@ts-libs/libs-errors-common";
import { describe, it } from "node:test";
import assert from "assert";

describe("error", () => {
  it("should create a new instance of Error", () => {
    const err = error("foo");
    assert.ok(err instanceof Error);
    assert.strictEqual(err.name, "Error");
    assert.strictEqual(err.cause, undefined);
    assert.ok(typeof err.stack === "string");
    assert.strictEqual(err.message, "foo");
  });
  it("should create a new instance of Error with the specified cause", () => {
    const err = error("foo", { cause: "bar" });
    assert.ok(err instanceof Error);
    assert.strictEqual(err.name, "Error");
    assert.strictEqual(err.cause, "bar");
    assert.ok(typeof err.stack === "string");
    assert.strictEqual(err.message, "foo");
  });
});
