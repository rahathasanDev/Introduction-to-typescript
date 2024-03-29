{

  // Example with arrays
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];

// Concatenating arrays using spread operator
const concatenatedArray: number[] = [...arr1, ...arr2];
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example with objects
interface MyObject {
    foo?: string;
    baz?: string; // Optional property
}

const obj1: MyObject = { foo: 'bar' };
const obj2: MyObject = { baz: 'qux' };

// Merging objects using spread operator
const mergedObject: MyObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { foo: 'bar', baz: 'qux' }



}
