{class Animal {
  public name: string; // Public member
  private age: number; // Private member
  protected category: string; // Protected member

  constructor(name: string, age: number, category: string) {
      this.name = name;
      this.age = age;
      this.category = category;
  }

  public displayInfo(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}, Category: ${this.category}`);
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
      super(name, age, "Mammal");
  }

  public displayInfo(): void {
      // Accessing protected member 'category' from the base class
      console.log(`Name: ${this.name}, Age: ${this.age}, Category: ${this.category}`);
  }
}

let animal = new Animal("Leo", 5, "Mammal");
console.log(animal.name); // Accessible
// console.log(animal.age); // Error: 'age' is private and cannot be accessed outside the class
// console.log(animal.category); // Error: 'category' is protected and cannot be accessed outside the class

let dog = new Dog("Buddy", 3);
console.log(dog.name); // Accessible
// console.log(dog.age); // Error: 'age' is private and cannot be accessed outside the class
// console.log(dog.category); // Error: 'category' is protected and cannot be accessed outside the class
}