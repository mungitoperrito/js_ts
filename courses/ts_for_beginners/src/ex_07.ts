// Later lessons turn on tsconfig.json checks that might invalidate uncommented code.
// Add export line so tsc thinks it's a module for namespace purpose
export {};

// Type alias  -- creates a new type for general use

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void,   // Function doesn't return anything
}

let ee_01: Employee = {
    id: 1,
    name: "someEE",
    retire: (date: Date) => {
        console.log(`In assignment: ${date}`);
    }
}

// Compiler complains if variable is unused
console.log(ee_01);