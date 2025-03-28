
// Later lessons turn on tsconfig.json checks that might invalidate uncommented code.
// Add export line so tsc thinks it's a module for namespace purpose
export {};


// Functions

// Turn on in tsconfig.json:
//    "noUnusedLocals"         (Not part of strict)
//    "noUnusedParameters"     (Not part of strict)
//    "noImplicitReturns"      (Not part of strict)


// // function calculateTax(income: number) {         // No return type annotation
// function calculateTax(income: number): number {    //   Type annotate functions
//    if (income < 50_000)
//     return income * 1.2;            // Problem: Return > 50K undefined
//                                     // js default return is 'undefined', not 'number'
//    return income * 1.3;
// }

// // Number of args
// function calculateTax(income: number, taxYear: number): number {
//     if (taxYear < 2022)
//      return income * 1.2;
//     return income * 1.3;
//  }
// calculateTax( 10_000, 2024);    // Must have exactly 2 args of the required types


// // Optional args - style 1  (taxYear is optional)
// function calculateTax(income: number, taxYear?: number): number {
//     if ((taxYear || 2022) < 2022)          //  (parameter || default)
//         return income * 1.2;
//     return income * 1.3;
//     }


// Optional args - style 2   (taxYear has default value)
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
    }

// tsc fails if function isn't called.
calculateTax(20_000);