# How Generics Enable Reusable and Strictly Typed Code in Typescript

Balancing reusability with type safety is one of the biggest challenges for developers. As a developer, we have to write flexible code in many situations, also we want Typescript to strictly enforce types so that there is no bugs in our code. Generics solve both problems.

### The Problem: Reusuability vs Type Safety

Imagin we are writing a simple function that return the value passed into it

```Typescript
function returnString(value: string): string {
    return value;
}
function returnNumber(value: number): number {
    return value;
}
```

This works but it is repititive. If we want same function for all types , we need to write same function again and again. This violates the **DRY(Don't Repeat Yourself) principle**.

### The Solution: Generics

Generics allow us to write one function which can work with any type, still preserving type safety.

```Typescript
function returnValue<T>(value: T): T {
    return value;
}
```

Here, `T` is a type parameter- like a placeholder for actual type. We can pass any type of value into the function and it will preserve type safety correctly.

When we call them:

```Typescript
const a = returnValue(12);
const b = returnValue("hello");
```

It replace `T` with `number` and `string` respectively. Typescript knows a is a `number` and b is a `string`. So it preseves the type safety. <br>
Generics also works with interfaces, classes. We can also add constraints to generics.
