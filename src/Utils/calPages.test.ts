import calcPages from "./calcPages";

test("number of pages with 20 students", () => {
  expect(calcPages(20)).toBe(4);
});

test("number of pages with 7 students", () => {
  expect(calcPages(7)).toBe(2);
});
test("number of pages with 6 students", () => {
  expect(calcPages(6)).toBe(1);
});

test("number of pages with a 0 students", () => {
  expect(calcPages(0)).toBe(0);
});
