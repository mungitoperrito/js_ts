// Variable by object reference or by primitive

// Reference types: function, object, array

// Primitive
let x = 10;
let y = x;

console.log(x, y);     // 10 10

x = 20;
console.log(x, y);     // 20 10

// Object reference
let a = {value: 10};
let b = a;

console.log(a,b);       // { value: 10 } { value: 10 }

a.value = 20;

console.log(a,b);       // { value: 20 } { value: 20 }
