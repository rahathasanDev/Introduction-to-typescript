// Example 1: A simple identity function using generics

function identity<T>(arg: T): T {
  return arg;


}let result = identity<string>("hello"); // result is of type string
console.log(result); // Output: hello

// TypeScript can also infer the type based on the argument
let inferredResult = identity(42); // inferredResult is of type number

// rahat here you dont need to defined its number , its type based on the argument ......
// let inferredResult = identity<number>(42); // 
console.log(inferredResult); // Output: 42