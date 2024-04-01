// Reference Type 



let obj1 = { key: 'value' };
let obj2 = obj1; // obj2 now references the same object as obj1
obj2.key = 'new value';
console.log(obj1.key); // 'new value'

let array1 = [1, 2, 3];
let array2 = array1; // array2 now references the same array as array1
array2.push(4);
console.log(array1); // [1, 2, 3, 4]


