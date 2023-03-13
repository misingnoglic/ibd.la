import {
  dataDirections,
  anyHasPrimary,
  pairExists,
  getDataDirection,
} from "./groupSelectionUtils";

const fakeData = {
  group1: {
    group2: ["data", "data2"],
  },
  group2: {
    group3: ["data"],
  },
};

describe("getDataDirection", () => {
  it("Computes normal data direction", () => {
    expect(getDataDirection(fakeData, "group1", "group2")).toEqual(
      dataDirections.normal
    );
    expect(getDataDirection(fakeData, "group2", "group3")).toEqual(
      dataDirections.normal
    );
  });

  it("Computes reverse data direction", () => {
    expect(getDataDirection(fakeData, "group2", "group1")).toEqual(
      dataDirections.reverse
    );
    expect(getDataDirection(fakeData, "group3", "group2")).toEqual(
      dataDirections.reverse
    );
  });

  it("Computes no data direction", () => {
    expect(getDataDirection(fakeData, "group2", "groupNone")).toEqual(
      dataDirections.none
    );
  });
});

describe("pairExists", () => {
  it("Computes Pair Existing", () => {
    expect(pairExists(fakeData, "group1", "group2")).toBe(true);
    expect(pairExists(fakeData, "group2", "group3")).toBe(true);
  });
  it("Computes Pair Not Existing", () => {
    expect(pairExists(fakeData, "group1", "group3")).toBe(false);
    expect(pairExists(fakeData, "group2", "groupNone")).toBe(false);
    expect(pairExists(fakeData, "groupNone", "group1")).toBe(false);
  });
});

describe("anyHasPrimary", () => {
  it("Computes has primary", () => {
    expect(anyHasPrimary(fakeData, "group1")).toBe(true);
    expect(anyHasPrimary(fakeData, "group2")).toBe(true);
    expect(anyHasPrimary(fakeData, "group3")).toBe(true);
    expect(anyHasPrimary(fakeData, "groupNone")).toBe(false);
  });
});
