// Problem !
function filterEvenNumbers(arr: number[]): number[] {
  return arr.filter((idx: number) => idx % 2 == 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 2
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverseString("Typescript"));

// Problem 3
type StringOrNumber = string | number;

function checkType(input: StringOrNumber) {
  if (typeof input === "string") return "String";
  else return "Number";
}

console.log(checkType("Hello"));
console.log(checkType(42));

// Problem 4
function getProperty<T>(obj: T, key: keyof T) {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

console.log(getProperty(user, "name"));

// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(obj: Book): Object {
  return { ...obj, isRead: true };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

console.log(toggleReadStatus(myBook));

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

const student = new Student("Alice", 20, "A");

console.log(student.getDetails());

// Problem 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((item) => arr2.includes(item));
}

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
