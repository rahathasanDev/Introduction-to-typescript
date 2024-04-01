type MyObject = {
  name: string;
  age: number;
  address: string;
};

type KeyOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

const key: KeyOfType<MyObject, string> = 'name'; // This is valid
// const key: KeyOfType<MyObject, number> = 'name'; // This will result in a type error
