// Later lessons turn on tsconfig.json checks that might invalidate uncommented code.
// Add export line so tsc thinks it's a module for namespace purpose
export {};

// Intersection types

// Joins two types together where their properties overlap
//   the intersection has to make sense

type Draggable = {
    drag: () => void
    // Some other stuff
}

type Resizable = {
    resize: () => void
    // Some other stuff
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    // Have to implement all properties of both types
    drag: () => {},
    resize: () => {},
}

console.log(textBox);