import { expect, test } from "vitest";
import {
  getDaysUntilFirstSunday,
  calculateMedian,
  getMedianForFirstWeek,
} from "./expenses";

test("getDaysUntilFirstSunday", () => {
  expect(getDaysUntilFirstSunday(2024, 1)).toBe(7);
  expect(getDaysUntilFirstSunday(2024, 3)).toBe(3);
});

test("calculateMedian", () => {
  expect(calculateMedian([1, 2, 3, 4, 5])).toBe(3);
  expect(calculateMedian([1, 2, 3, 4])).toBe(2.5);
  expect(calculateMedian([1, 2, 3, 4, 5, 6])).toBe(3.5);
});

test("getMedianForFirstWeek", () => {
  const expenses = {
    "2024-01": {
      "05": {
        shopping: [],
        utilities: [],
      },
      15: {
        shopping: [14.5],
        utilities: [175.6],
      },
    },
  };
  const expenses2 = {
    "2024-01": {
      "05": {
        shopping: [10],
        utilities: [10],
      },
      15: {
        shopping: [14.5],
        utilities: [175.6],
      },
    },
  };
  expect(getMedianForFirstWeek(expenses)).toEqual([]);

  expect(getMedianForFirstWeek(expenses2)).toEqual([10]);
});
