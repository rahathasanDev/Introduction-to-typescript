{// typeof type guards
  function isNumber(x: any): x is number {
    return typeof x === "number";
  }

  let value: any = 5;
  if (isNumber(value)) {
    console.log("value is a number");
  } else {
    console.log("value is not a number");
  }
}

{// in operator type guard:
  interface Car {
    brand: string;
    model: string;
  }

  function isCar(obj: any): obj is Car {
    return 'brand' in obj && 'model' in obj;
  }

  let example: any = { brand: 'Toyota', model: 'Camry' };
  if (isCar(example)) {
    // TypeScript knows that example is a Car here
    console.log(example.brand, example.model);
  }
}


{// instanceof type guard
  class MyClass {
    // class definition
  }

  function isMyClass(obj: any): obj is MyClass {
    return obj instanceof MyClass;
  }

  let example: any = new MyClass();
  if (isMyClass(example)) {
    // TypeScript knows that example is an instance of MyClass here
    example.someMethod();
  }


}

// Custom type predicates: Allows defining custom functions that act as type guards.
interface Animal {
  name: string;
}

function isAnimal(obj: any): obj is Animal {
  return obj && typeof obj.name === 'string';
}

let example: any = { name: 'Cat', age: 3 };
if (isAnimal(example)) {
  // TypeScript knows that example is an Animal here
  console.log(example.name);
}

