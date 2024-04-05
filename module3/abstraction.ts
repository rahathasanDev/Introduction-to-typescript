{interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
      this.radius = radius;
  }

  calculateArea(): number {
      return Math.PI * this.radius ** 2;
  }
}

class Square implements Shape {
  private sideLength: number;

  constructor(sideLength: number) {
      this.sideLength = sideLength;
  }

  calculateArea(): number {
      return this.sideLength ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.calculateArea()); // Output: 78.53981633974483

const square = new Square(5);
console.log(square.calculateArea()); // Output: 25
}