{
function add(x: number, y: number): number {
  return x + y;
}

const result: number = add(3, 5); // result will be 8

// Optional and Default Parameters:
function greet(name: string, greeting: string = "Hello"): void {
  console.log(`${greeting}, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob", "Good morning"); // Output: Good morning, Bob!

// void: If a function does not return any value, you can specify void as the return type.
}

{ // Rest Parameters:
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

const total: number = sum(1, 2, 3, 4, 5); // total will be 15 


}

// what is reduce and how its used 
/*
The term "reduce" in the context of the `reduce()` method doesn't necessarily mean "decrease" in the sense of making something smaller. Instead, it refers to the action of "reducing" a collection (such as an array) into a single value through some kind of accumulation or transformation process.

In the case of `numbers.reduce()`, the method is called "reduce" because it's used to "reduce" an array of values down to a single value. This reduction doesn't necessarily involve decreasing the size of the array; rather, it involves combining the elements of the array to produce a single result.

The term "reduce" can also be thought of in terms of "summarizing" or "collapsing" the array into a single value, which might be more intuitive than thinking of it strictly in terms of "decreasing" the array size.

So, when you call `numbers.reduce()` to find the sum of the numbers in the array, you're essentially "reducing" the array of numbers into a single value, which is the sum of all the numbers.*/

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
