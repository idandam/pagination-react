import canEdit from "./canEdit";

test("can edit in path /students with numOfStudents > 0", () => {
  expect(canEdit("/students", 1)).toBe(true);
});
test("can edit in path /students/ with numOfStudents > 0", () => {
  expect(canEdit("/students/", 1)).toBe(true);
});
test("can edit in path /students// with numOfStudents > 0", () => {
  expect(canEdit("/students//", 1)).toBe(true);
});
test("can edit in path /student/params with numOfStudents > 0", () => {
  expect(canEdit("/student/id", 1)).toBe(false);
});
test("can edit in path /student with no students", () => {
  expect(canEdit("/student", 0)).toBe(false);
});
