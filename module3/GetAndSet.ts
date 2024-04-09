class MyClass {
  private _myProperty: number = 0;

  // Getter method
  get myProperty(): number {
      return this._myProperty;
  }

  // Setter method
  set myProperty(value: number) {
      // You can add validation or additional logic here
      if (value >= 0) {
          this._myProperty = value;
      } else {
          console.error("Value must be non-negative.");
      }
  }
}

// Usage
const myObject = new MyClass();
console.log(myObject.myProperty); // Output: 0

myObject.myProperty = 10;
console.log(myObject.myProperty); // Output: 10

myObject.myProperty = -5; // This will trigger the setter method's validation/error message
console.log(myObject.myProperty); // Output: 10 (since the value was not set)
