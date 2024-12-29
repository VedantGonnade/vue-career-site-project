import nextElementInList from "@/utils/nextElementInList";
import { describe, it } from "vitest";

describe("nextElementInList", () => {
  it("should return the next element in the list", () => {
    const list = [1, 2, 3, 4, 5];
    const currentElement = 2;
    const result = nextElementInList(list, currentElement);
    expect(result).toBe(3);
  });

  it("should return the first element if the current element is the last one", () => {
    const list = [1, 2, 3, 4, 5];
    const currentElement = 5;
    const result = nextElementInList(list, currentElement);
    expect(result).toBe(1);
  });
});
