// In TypeScript, a type alias is a way to create a new name for any type. It doesn't create a new type, but simply gives an existing type a new name. This can be useful for simplifying complex type definitions, making code more readable, and for creating reusable types.

type Age = number;
type Person = {
  name: string;
  age: Age;
};

function printPerson(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const john: Person = {
  name: "John",
  age: 30
};

printPerson(john);

// output
// Name: John, Age: 30
