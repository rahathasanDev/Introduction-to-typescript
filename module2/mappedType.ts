type OriginalType = {
  key1: number;
  key2: string;
};

type OptionalKeys<T> = {
  [Key in keyof T]?: T[Key];
};

const originalObject: OriginalType = {
  key1: 42,
  key2: 'Hello'
};

const optionalObject: OptionalKeys<OriginalType> = {
  key1: originalObject.key1,
  // We omit key2 intentionally to make it optional
};

console.log(optionalObject);
