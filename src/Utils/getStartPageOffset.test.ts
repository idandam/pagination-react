import getStartPageOffset from "./getStartPageOffset";

test("visible pages {1,2,3} with currPage=4, pages=4, maxPagesToDisplay=3", () => {
  expect(getStartPageOffset(4, 4, 3)).toBe(1);
});
