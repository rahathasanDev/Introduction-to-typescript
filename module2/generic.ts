{
  // Here's a basic example of a type generic:

  type Box<T> = {
    value: T;
  };

  // Usage
  let numberBox: Box<number> = { value: 10 };
  let stringBox: Box<string> = { value: "hello" };

  // interface generic

  interface Box1<T> {
    value: T;
  }

  // Usage
  let numberBox1: Box1<number> = { value: 10 };
  let stringBox2: Box1<string> = { value: "hello" };



  // function generic

  function identity<T>(arg: T): T {
    return arg;
  }

  let output = identity<string>("hello");
  console.log(output); // Output: hello

  let output2 = identity<number>(123);
  console.log(output2); // Output: 123
}
