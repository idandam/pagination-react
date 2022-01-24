export default class Student {
  name: string;
  age: number;
  gender: string;
  school: string;
  email: string;
  graduated: boolean;

  constructor(
    name: string,
    age: number,
    gender: string,
    school: string,
    email: string,
    graduated: boolean
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.school = school;
    this.email = email;
    this.graduated = graduated;
  }
}
