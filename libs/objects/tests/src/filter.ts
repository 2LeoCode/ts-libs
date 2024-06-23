import { describe, it } from "node:test";
import assert from "node:assert";
import "@ts-libs/libs-objects-common";

describe("filter", () => {
  it("should filter all properties that don't satisfy a predicate from an object", () => {
    assert.deepStrictEqual(
      Object.keys(
        Object.filter(
          {
            foo: "hello",
            bar: 42,
            baz: 42,
          },
          (_, value) => value !== 42,
        ),
      ),
      ["foo"],
    );
  });
});
