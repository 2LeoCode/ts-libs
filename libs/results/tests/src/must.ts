import { describe, it } from "node:test";
import assert from "node:assert";
import { Result } from "@ts-libs/libs-results-common";

describe("must", () => {
  it("should return the value contained inside a success result", () => {
    assert.strictEqual(Result.must(Result.success(42)), 42);
  });
  it("should throw if the result is a failure", () => {
    assert.throws(() => Result.must(Result.failure(new Error("hello"))), {
      message: "hello",
    });
  });
  it("should return a promise that resolves to the value contained inside a sucess result", async () => {
    const p = Result.mustAsync(Result.success(42));
    assert.ok(p instanceof Promise);
    assert.strictEqual(await p, 42);
  });
  it("should return a promise that rejects if the result is a failure", async () => {
    const p = Result.mustAsync(Result.failure(new Error("hello")));
    assert.ok(p instanceof Promise);
    assert.rejects(p, { message: "hello" });
  });
});
