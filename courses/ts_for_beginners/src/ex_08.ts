// Later lessons turn on tsconfig.json checks that might invalidate uncommented code.
// Add export line so tsc thinks it's a module for namespace purpose
export {};

// Union types

function kgToLbs( weight: number | string): number{
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        // return Number(weight) * 2.2;     // parseInt much more general
        return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));