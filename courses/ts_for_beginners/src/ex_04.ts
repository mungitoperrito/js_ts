// Fundamentals

export {};               // Make module to preserve namespaces

// // Declared types
// let sales: number = 123_456_789;
// let course: string = 'TypeScript';
// let isPublished: boolean = true;

// Inferred types - initialization gives the type
let sales = 123_456_789;
let course = 'TypeScript';
let isPublished = true;
let someVar;            // Inferred type is: any
                        //   any values can change type which is
                        // counter to the ts goal

// Arrays
let array_01 = [1,2,3];         // implied type number
let array_02 = [];              // implied type any  (avoid)
let array_03: number[] = [];    // explicit type number
