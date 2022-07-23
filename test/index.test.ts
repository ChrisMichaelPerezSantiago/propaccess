import { describe, expect, it } from "vitest";
import { deepPropAccess } from "../dist";

const obj = {
  data: {
    numberProp: 2,
    stringProp: "code",
    nullProp: null,
    undefinedProp: undefined,
    arrayProp: [1, 2, 3, 4, 5],
    deep: {
      key: 1,
      deep: {
        key: 2,
        deep: {
          key: 3,
        },
      },
    },
  },
};

describe("should", () => {
  it("be object", () => {
    expect(deepPropAccess(obj, "data")).toBeTypeOf("object");
  });
  it("be null", () => {
    expect(deepPropAccess(obj, "data.nullProp")).equal(null);
  });
  it("be undefined", () => {
    expect(deepPropAccess(obj, "data.undefinedProp")).equal(undefined);
  });
  it("must have length (5) arrayProp array", () => {
    expect(deepPropAccess(obj, "data.arrayProp")).length(5);
  });
});
