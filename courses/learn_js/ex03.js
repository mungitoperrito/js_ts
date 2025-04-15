// Arrays

let array_01 = [2,5,3];
let array_02 = [[1,2,5], [4,3,9]];

console.log(array_02[0]);           // [1,2,5]
console.log(array_02[0][1]);        // 2

// push
array_01.push(4);
console.log(array_01)            // [ 2, 5, 3, 4 ]
array_01.push([4, 5]);
console.log(array_01)            // [ 2, 5, 3, 4, [ 4, 5 ] ]
array_01.push(6,7);
console.log(array_01);           // [ 2, 5, 3, 4, [ 4, 5 ], 6, 7 ]

// pop
let popped = array_01.pop();
console.log("Popped: ", popped, " Array: ", array_01);
   // Popped:  7  Array:  [ 2, 5, 3, 4, [ 4, 5 ], 6 ]


// shift
let shifted = array_01.shift();
console.log("Shifted: ", shifted, " Array: ", array_01);
   // Shifted:  2  Array:  [ 5, 3, 4, [ 4, 5 ], 6 ]


// unshift
array_01.unshift(0);
console.log(array_01);    // [ 0, 5, 3, 4, [ 4, 5 ], 6 ]

