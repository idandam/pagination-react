[Live demo](https://coolpagination.netlify.app)

## Goal

Implement a Two page react app.
The first page will fetch a mock of 20 students and show them using pagination,
with at most 6 students per page.
When you click a on a stdudent you will be navigated to the The second page which will show you an editable form with the student details.
The data will be fetched once and it will be presistent using LocalStorage.

## Pages

### /_students_

Custom pagination component - fetching a mock resource width 20 students and showing them in a list with at most 6 students per content page.

### /_students/:studentId_

Showing a form with the student details. The form fields can be edited.

## Features and Tools

custom hooks, react-router-dom v6, Form validation, pagination, Fetch API, LocalStorage, TypeScript.
