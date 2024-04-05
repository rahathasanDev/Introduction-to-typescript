class Animal {
  name: string;

  constructor(name: string) {
      this.name = name;
  }

  makeSound() {
      console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  makeSound() {
      console.log("Dog barks");
  }
}

class Cat extends Animal {
  makeSound() {
      console.log("Cat meows");
  }
}

// Polymorphic behavior
let animal: Animal;

animal = new Dog("Buddy");
animal.makeSound(); // Output: Dog barks

animal = new Cat("Whiskers");
animal.makeSound(); // Output: Cat meows
