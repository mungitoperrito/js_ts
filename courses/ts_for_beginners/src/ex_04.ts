// Fundamentals

export {};               // Make module to preserve namespaces

// // Declared types
// let sales: number = 123_456_789;
// let course: string = 'TypeScript';
// let isPublished: boolean = true;


// // Inferred types - initialization gives the type
// let sales = 123_456_789;
// let course = 'TypeScript';
// let isPublished = true;
// let someVar;            // Inferred type is: any
//                         //   any values can change type which is
//                         // counter to the ts goal


// // Arrays
// let array_01 = [1,2,3];         // implied type number
// let array_02 = [];              // implied type any  (avoid)
// let array_03: number[] = [];    // explicit type number


// Tuples
// Converted to plain arrays in .js
let tup_01: [number, string] = [0, 'zero'];


// Enums
// enum Size { Small, Medium, Large };   // enum has an implied 0 based value
//                                       //   - can change value. The other vals
//                                       //   adjust { Small = 5, Medium, Large }
const enum Size { Small, Medium, Large };   //   - for small js output use const

let shirtSize: Size = Size.Small;
if (shirtSize == 0) {
    console.log(`Size is ${Size.Small.toString()}: ${shirtSize}`);   // Format string ` - not quotes
}