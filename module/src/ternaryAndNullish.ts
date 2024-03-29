{const age: number = 20;
const status: string = age >= 18 ? "Adult" : "Minor";

console.log(status); // Output: Adult
}


// nullish operator 

const foo = null ?? 'default value';
console.log(foo); // Output: 'default value'

const bar = undefined ?? 'fallback';
console.log(bar); // Output: 'fallback'

const baz = 0 ?? 42;
console.log(baz); // Output: 0 (because 0 is not nullish)
// heres why 
// In the expression const baz = 0 ?? 42; 0 is not null or undefined, so the nullish coalescing operator ?? will consider 0 as a defined value and will not proceed to the fallback value (42). Therefore, baz will be assigned the value 0.
