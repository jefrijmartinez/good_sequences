import minCost from "../main.js";
import { expect } from "chai";

describe("All examples should be ok", () => {
  it("should match expected result for sample #1", () => {
    const towers = 4;
    const heights = [1, 3, 2, 1000000000];
    const costs = [7, 3, 6, 2];

    expect(minCost(towers, heights, costs)).equal(0);
  });

  it("should match expected result for sample #2", () => {
    const towers = 3;
    const heights = [2, 2, 2];
    const costs = [3, 10, 6];

    expect(minCost(towers, heights, costs)).equal(9);
  });

  it("should match expected result for sample #2", () => {
    const towers = 3;
    const heights = [2, 2, 3];
    const costs = [4, 1, 5];

    expect(minCost(towers, heights, costs)).equal(2);
  });
});
