function Circle(radius, location){
    this.radius = radius;
    this.location = location;
    this.draw = function(){
        console.log('DRAW: Factory function');
    }
}

const circle = new Circle(10, { x:1, y:1});

// // Uncomment to access object values
// for (let key in circle){
//    // print everything
//    console.log('Every: ', key);

//    // print key and it's value
//    console.log('K, V: ',  key, circle[key]);

//    // only print properties and their values
//    if (typeof circle[key] !== 'function')
//      console.log('Prop: ', key, circle[key]);
// }


// // Uncomment to get an array of the object keys
// // Get array of object keys
// const keys = Object.keys(circle);
// console.log(keys);


// Check if property is in an object
const propertiesToCheck = ['someProperty', 'radius', 'location'];

// for .. in works for object values
// Used with arrays, in only returns the index, not value
// Behavior may change depending on code used elsewhere
for (let p in propertiesToCheck){
    console.log(p);
    console.log(propertiesToCheck[p]);
}


for (let i = 0; i < propertiesToCheck.length; i++ ){
    let prop = propertiesToCheck[i];
    console.log(prop);
    if (prop in circle){
        console.log('TRUE');
    } else {
        console.log('FALSE');
    }
    console.log();
}