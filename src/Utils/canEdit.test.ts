import canEdit from "./canEdit";

test("can edit in path /students", () => {
  expect(canEdit("/students")).toBe(true);
});
test("can edit in path /students/", () => {
  expect(canEdit("/students/")).toBe(true);
});
test("can edit in path /students//", () => {
  expect(canEdit("/students//")).toBe(true);
});
test("can edit in path /student/params", () => {
  expect(canEdit("/student/id")).toBe(false);
});

