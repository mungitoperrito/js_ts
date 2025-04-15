// Syntax notes

// Destructuring

let threeDims = {x: 2.1, y: 4.3, z: 5.6};

// // Old syntax
// let x = threeDims.x;
// let y = threeDims.y;
// let z = threeDims.z;

// // Destructuring syntax
// let {x: a, y: b, z: c} = threeDims;
// console.log(a, b, c);      // Reverse order from Python assign x to a
// let {y: d} = threeDims;
// console.log(d);            // Don't have to use all the variables




// // Nested destructuring
// let temps = {
//     today: {min: 72, max: 80},
//     tomorrow: {min:73, max: 81}
// };

// function getMaxTemp(forecast){
//     const { today: { max: todayMax }} = forecast;
//     const { tomorrow: { max: tomorrowMax }} = forecast;

//     return (todayMax > tomorrowMax) ? "Today: " + todayMax
//                                     : "Tomorrow: " + tomorrowMax ;
// }

// console.log(getMaxTemp(temps));


// Rest of operator
const nums = [1,2,3,4,5,6,7,8,9,0];

function removeFirstTwo(inputArray){

    // ...variableName consumes the rest of the array
    const [,, ...restOfArray] = inputArray;

    return restOfArray;
}
console.log(nums);
console.log(removeFirstTwo(nums));