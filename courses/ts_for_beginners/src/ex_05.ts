// Functions

// Turn on in tsconfig.json:
//    "noUnusedParameters"     (Not part of strict)
//    "noImplicitReturns"      (Not part of strict)

export {};

// // function calculateTax(income: number) {         // No return type annotation
// function calculateTax(income: number): number {    //   Type annotate functions
//    if (income < 50_000)
//     return income * 1.2;            // Problem: Return > 50K undefined
//                                     // js default return is 'undefined', not 'number'
//    return income * 1.3;
// }

// function calculateTax(income: number) {
function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 50_000)
     return income * 1.2;
    return income * 1.3;
 }

 calculateTax( 10_000, 2024);    // Must have exactly 2 args of the required types