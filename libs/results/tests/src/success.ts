import { describe, it } from "node:test";
import assert from "node:assert";
import { Result } from "@ts-libs/libs-results-common";

describe("success", () => {
  it("should create a new success instance", () => {
    const result: Result<number> = Result.success(42);

    assert.strictEqual(result.ok, true);
    assert.strictEqual(result.value, 42);
    assert.ok(!("error" in result));
  });
});
