
// Later lessons turn on tsconfig.json checks that might invalidate uncommented code.
// Add export line so tsc thinks it's a module for namespace purpose
export {};

// Objects
// js lets you update object properties dynamically
// ts requires definitions and types

// // Ex 01 - declare object
// let employee: {                   // Object type declaration
//     id: number,
//     name: string,
// } =  {                            // Object values declaration
//     id: 1,
//     name: "someEE"
// }

// // Ex 02 - readonly
// let employee: {
//     readonly id: number,          // Can't modify property
//     name: string,
// } =  {
//     id: 1,
//     name: "someEE"
// }

// Ex 03 add a function
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void,   // Function doesn't return anything
} =  {
    id: 1,
    name: "someEE",
    retire: (date: Date) => {
        console.log(`In assignment: ${date}`);
    }
}

// Compiler complains if variable is unused
console.log(employee);

// Retire function has no return value so this doesn't print the date
console.log(`In call: ${employee.retire(new Date("2024-06-01"))}`);