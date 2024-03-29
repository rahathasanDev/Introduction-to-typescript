{
  // interface
  interface Person {
    firstName: string;
    lastName: string;
    age: number;
    greet: () => string;
  }
  // type 
  type Person1 = {
    firstName: string;
    lastName: string;
    age: number;
    greet: () => string;
  };



  const john: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: () => {
      return "Hi there!";
    }
  };

  // Interface for Arrays:
  interface NumberArray {
    [index: number]: number;
  }

  // Usage
  let numArray: NumberArray = [1, 2, 3, 4, 5];
  console.log(numArray[0]); // Output: 1


  // Interface for Functions:
  interface MathFunction {
    (x: number, y: number): number;
  }

  // Usage
  let add: MathFunction = function (x: number, y: number): number {
    return x + y;
  };

  console.log(add(2, 3)); // Output: 5














}