class MathUtils {
  static PI: number = 3.14;

  static calculateArea(radius: number): number {
      return this.PI * radius * radius;
  }
}

console.log(MathUtils.PI); // Output: 3.14

const radius = 5;
const area = MathUtils.calculateArea(radius);
console.log(`The area of a circle with radius ${radius} is ${area}`); // Output: The area of a circle with radius 5 is 78.5
