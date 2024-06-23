import { describe, it } from "node:test";
import assert from "node:assert";
import "@ts-libs/libs-objects-common";

describe("merge", () => {
  it(
    "should merge a source object into a destination object, " +
      "but ensures that if a property in src is undefined, " +
      "it will not override dst",
    () => {
      assert.deepStrictEqual(
        Object.merge(
          { a: "hello", b: 42, d: 42 },
          { b: undefined, c: "world", d: "!" },
        ),
        {
          a: "hello",
          b: 42,
          c: "world",
          d: "!",
        },
      );
    },
  );
});
