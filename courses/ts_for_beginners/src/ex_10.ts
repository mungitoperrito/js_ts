// Later lessons turn on tsconfig.json checks that might invalidate uncommented code.
// Add export line so tsc thinks it's a module for namespace purpose
export {};

// Literal types  - value has to be an exact match

type Quantity = 25 | 50 | 75 | 100;

type Metric = 'cm' | 'inch';

type Measurement = {
    length: Quantity,
    units: Metric
}


let quantity: Quantity = 75;
let unit: Metric = 'inch';
let dist: Measurement = { length: quantity, units: unit };

console.log(quantity);
console.log(unit);
console.log(dist);
