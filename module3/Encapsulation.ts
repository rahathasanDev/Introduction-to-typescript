{class Car {
  private speed: number;
  private make: string;

  constructor(make: string) {
      this.make = make;
      this.speed = 0;
  }

  accelerate(increment: number): void {
      this.speed += increment;
  }

  brake(decrement: number): void {
      this.speed -= decrement;
  }

  getSpeed(): number {
      return this.speed;
  }

  getMake(): string {
      return this.make;
  }
}

let myCar = new Car("Toyota");
myCar.accelerate(50);
console.log("Current speed of " + myCar.getMake() + ": " + myCar.getSpeed() + " km/h");
}


// TypeScript provides three access modifiers:

// public: Members are accessible from outside the class.
// private: Members are accessible only within the class.
// protected: Members are accessible within the class and its subclasses.