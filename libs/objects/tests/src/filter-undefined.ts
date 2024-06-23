import { describe, it } from "node:test";
import assert from "node:assert";
import "@ts-libs/libs-objects-common";

describe("filterUndefined", () => {
  it("should remove all undefined properties from an object", () => {
    assert.deepStrictEqual(
      Object.keys(
        Object.filterUndefined({
          foo: "hello",
          bar: undefined,
        }),
      ),
      ["foo"],
    );
  });
});
