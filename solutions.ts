// Problem !
function filterEvenNumbers(arr: number[]): number[] {
  return arr.filter((num: number) => num % 2 == 0);
}

// Problem 2
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

// Problem 3
type StringOrNumber = string | number;

function checkType(input: StringOrNumber) {
  if (typeof input === "string") return "String";
  else return "Number";
}

// Problem 4
function getProperty<T>(obj: T, key: keyof T) {
  return obj[key];
}

// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(obj: Book) {
  return { ...obj, isRead: true };
}

// Problem 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((item) => arr2.includes(item));
}
