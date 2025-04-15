// Destructure to pass function params

const complicatedObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

// const - can't reassign whole object, but can update elements
// Can no longer update elements
Object.freeze(complicatedObject);

// Parameter list destructures the object
function returnPart({b,c}){
    return {b, c};
}

console.log(complicatedObject);

// The function will destructure the object components
console.log(returnPart(complicatedObject));