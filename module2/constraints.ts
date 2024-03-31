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

// Trying to use 'printLength' with an object without a 'length' property
// This will result in a compile-time error because the constraint restricts the parameter to objects with a 'length' property
// printLength(123); // Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.

