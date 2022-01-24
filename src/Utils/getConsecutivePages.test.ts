import getConsecutivePages from "./getConsecutivePages";

test("first page is 1, 3 pages displayed", () => {
  expect(getConsecutivePages(0, 3)).toStrictEqual([1, 2, 3]);
});

test("first page is 2, 2 pages displayed", () => {
  expect(getConsecutivePages(1, 2)).toStrictEqual([2, 3]);
});

test("first page is 3, 1 pages displayed", () => {
  expect(getConsecutivePages(2, 1)).toStrictEqual([3]);
});
