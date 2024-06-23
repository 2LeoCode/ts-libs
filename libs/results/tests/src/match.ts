import { describe, it } from "node:test";
import assert from "node:assert";
import { Result } from "@ts-libs/libs-results-common";

describe("match", () => {
  it("should match success results", () => {
    const result: Result<number> = Result.success(42);

    Result.match(result, {
      ok(value) {
        assert.strictEqual(value, 42);
      },
      err(error) {
        assert.fail("got failure instead of success");
      },
    });
  });
  it("should match failure results", () => {
    const result: Result<unknown, number> = Result.failure(42);

    Result.match(result, {
      ok(value) {
        assert.fail("got success instead of failure");
      },
      err(error) {
        assert.strictEqual(error, 42);
      },
    });
  });
  it("should asynchronously match success results", async () => {
    const result: Result<number> = Result.success(42);

    await Result.matchAsync(result, {
      async ok(value) {
        assert.strictEqual(value, 42);
      },
      async err(error) {
        assert.fail("got failure instead of success");
      },
    });
  });
  it("should asynchronously match failure results", async () => {
    const result: Result<unknown, number> = Result.failure(42);

    await Result.matchAsync(result, {
      async ok(value) {
        assert.fail("got success instead of failure");
      },
      async err(error) {
        assert.strictEqual(error, 42);
      },
    });
  });
});
