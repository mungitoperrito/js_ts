// Later lessons turn on tsconfig.json checks that might invalidate uncommented code.

// Debugging
//    Add breakpoint
//    Go to the run & debug panel
//    Click create a launch.json file
//    Add:     "preLaunchTask": "tsc: build - courses/ts_for_beginners/tsconfig.json",
//    (PATH is missing in video)

// tsconfig.json
//   sourceMap

export {};

// Compile fails if a variable name is reused in a different file!!
//  let age ..           // ex_01.ts
//  let age_ex03 ..      // WORKAROUND: ex_03.ts to avoid name clash
//  export{};            // SOLUTION: add export line so ts thinks it's a module

let age: number = 20;           // Add breakpoint here
if (age < 50) {
    age += 10;
}
console.log(age);

// let age_ex03: number = 20;           // Add breakpoint here
// if (age_ex03 < 50) {
//     age_ex03 += 10;

// console.log(age_ex03);