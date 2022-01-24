import getIndexRange from "./getIndexRange";

test("index range for page 4, given 20 students", () => {
  expect(getIndexRange(4, 20)).toStrictEqual({ from: 18, to: 20 });
});

test("index range for page 3, given 20 students", () => {
  expect(getIndexRange(3, 20)).toStrictEqual({ from: 12, to: 18 });
});

test("index range for page 2, given 7 students", () => {
  expect(getIndexRange(2, 7)).toStrictEqual({ from: 6, to: 7 });
});

test("index range for page 1, given 6 students", () => {
  expect(getIndexRange(1, 6)).toStrictEqual({ from: 0, to: 6 });
});
