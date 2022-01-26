import canEdit from "./canEdit";

test("can edit in path /students", () => {
  expect(canEdit("/students")).toBe(true);
});
test("can edit in path /students/", () => {
  expect(canEdit("/students/")).toBe(true);
});
test("can edit in path /students//", () => {
  expect(canEdit("/students//")).toBe(false);
});
test("can edit in path /student", () => {
  expect(canEdit("/student")).toBe(false);
});
