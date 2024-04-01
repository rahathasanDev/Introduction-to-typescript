//  Type Constraints:


interface Animal {
  name: string;
}

function printName<T extends Animal>(animal: T) {
  console.log(animal.name);
}

printName({ name: "Dog" }); // Works
printName({ name: "Cat", age: 3 }); // Error: Object literal may only specify known properties



// my problem 


// Define a generic function 'printLength' that prints the length of an object with a 'length' property
function printLength<T extends { length: number }>(obj: T): void {
  console.log("Length:", obj.length);
}

// Usage examples
const array = [1, 2, 3, 4, 5];
printLength(array); // Output: Length: 5

const str = "Hello, World!";
printLength(str); // Output: Length: 13

// Correct usage with an object having a 'length' property
const objWithLength = { length: 45 };
printLength(objWithLength); // Output: Length: 45

// Incorrect usage with an object missing 'length' property 
// TypeScript will throw a compile-time error because the constraint is violated
printLength({ length: 45 }); //error function calling
// Error: Argument of type '{ length: number; }' is not assignable to parameter of type 'string | number[]'.


// Trying to use 'printLength' with an object without a 'length' property
// This will result in a compile-time error because the constraint restricts the parameter to objects with a 'length' property
// printLength(123); // Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.

/*
Let's clarify:

The `printLength` function expects an argument `obj` that has a `length` property of type `number`. When you pass a string to this function, it works because strings in JavaScript have a `length` property indicating the number of characters in the string.

So when you pass the string `"Hello, World!"` to `printLength`, it prints the length of the string, not the number of characters. In this case, `"Hello, World!"` has 13 characters, hence the output "Length: 13".

If you pass an object without a `length` property or a `length` property of a type other than `number`, TypeScript will throw a compile-time error because it violates the constraint specified in the function signature. However, if the object has a `length` property of type `number`, it will work fine, regardless of whether it's an array or a string.

So in short, the `printLength` function works with any object that has a `length` property of type `number`, not just arrays. This includes strings in JavaScript.
*/
