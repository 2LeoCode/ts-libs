import { describe, it } from "node:test";
import assert from "node:assert";
import { Result } from "@ts-libs/libs-results-common";

describe("failure", () => {
  it("should create a new failure instance", () => {
    const result: Result<unknown, number> = Result.failure(42);

    assert.strictEqual(result.ok, false);
    assert.strictEqual(result.error, 42);
    assert.ok(!("value" in result));
  });
});
