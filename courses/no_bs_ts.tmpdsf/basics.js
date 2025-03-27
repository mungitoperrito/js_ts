// Lesson 01  - TypeScript file
//  The .js file gets overwritten when tsc runs
//
// Environment setup:
//   yarn init
//   yarn add typescript -D           # Development mode, ts compiler
//   yarn add ts-node -D              # Development mode, node wrapper
//   npx tsc --init                   # Initialize ts config file
// // Example 01, mismatched types
// let userName: string = "someUser";
// let isLoggedIn: boolean = true;
// // isLoggedIn += " lastName";        // BUG: wrong type
// let logged: string = isLoggedIn.toString() + " lastName";
// console.log(isLoggedIn);
// console.log(logged);
// // Example 02, arrays
// let userName: string = "fName lName";
// const names: string[] = userName.split(" ");
// const someNumbers: Array<number> = [1, 2, 3, 4]                  // Generic array type
// // Example 03, objects
// // const aPerson: {                                          // Defines and initializes an object
// //     fName: string;
// //     lName: string;
// // } = {
// //     fName: "Jack",
// //     lName: "Herr"
// // }
// // Better definition
// interface Person {
//     fName: string;
//     lName: string;
// }
// const jack: Person = {
//     fName: "Jack",
//     lName: "Herr"
// }
// Example 04, objects and maps
var ids = {
    10: "a",
    20: "b",
    30: "c",
};
ids[40] = "d";
console.log(ids);
