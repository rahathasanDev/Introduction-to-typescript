// Define an interface
interface User {
  name: string;
  age: number;
}

// Utility types
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type ReadonlyUser = Readonly<User>;
type PickedUser = Pick<User, 'name'>;
type OmittedUser = Omit<User, 'age'>;
type StringRecord = Record<string, number>;
type Excluded = Exclude<"a" | "b" | "c", "a" | "c">;
type Extracted = Extract<"a" | "b" | "c", "a" | "c">;
type NonNullableString = NonNullable<string | null | undefined>;

// Usage examples
const partialUser: PartialUser = { name: 'John' }; // Valid, age is optional
const requiredUser: RequiredUser = { name: 'John', age: 30 }; // Valid, age is required
const readonlyUser: ReadonlyUser = { name: 'John', age: 30 }; // Valid, properties are readonly
const pickedUser: PickedUser = { name: 'John' }; // Valid, only 'name' property is picked
const omittedUser: OmittedUser = { name: 'John' }; // Valid, 'age' property is omitted
const stringRecord: StringRecord = { 'a': 1, 'b': 2 }; // Valid, string keys with number values
const excluded: Excluded = "b"; // Valid, 'b' is excluded
const extracted: Extracted = "a"; // Valid, 'a' is extracted
const nonNullableString: NonNullableString = "hello"; // Valid, null and undefined are excluded

// Compilation errors for invalid assignments
// const invalidPartialUser: PartialUser = { age: 30 }; // Error: Property 'name' is missing
// const invalidRequiredUser: RequiredUser = { name: 'John' }; // Error: Property 'age' is missing
// const invalidReadonlyUser: ReadonlyUser = { name: 'John' }; // Error: Cannot assign to 'name' because it is a read-only property
// const invalidPickedUser: PickedUser = { age: 30 }; // Error: Property 'name' is missing
// const invalidOmittedUser: OmittedUser = { name: 'John', age: 30 }; // Error: Type '{ name: string; age: number; }' is not assignable to type '{ name: string; }'.
// const invalidStringRecord: StringRecord = { 'a': 'one', 'b': 'two' }; // Error: Type 'string' is not assignable to type 'number'.
// const invalidExcluded: Excluded = "a"; // Error: Type '"a"' is not assignable to type '"b"'
// const invalidExtracted: Extracted = "b"; // Error: Type '"b"' is not assignable to type '"a" | "c"'
// const invalidNonNullableString: NonNullableString = null; // Error: Type 'null' is not assignable to type 'string'.
