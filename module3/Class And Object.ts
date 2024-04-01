{// class in TypeScript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
// method 
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const john = new Person('John', 30);
console.log(john.name); // Output: John
console.log(john.age); // Output: 30
john.greet(); // Output: Hello, my name is John and I'm 30 years old.
}

{// parameter properties
class Person {
  constructor(public name: string, public age: number) {
    // No need to manually assign parameters to properties
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
}