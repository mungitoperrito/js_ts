// Factories
// Factories are constructor functions

// Avoid object literal syntax when objects have multiple methods (behavior)


function createCircle (radius) {
    return {
      //  radius: radius,       // pre ES6, have to repeat same name
      radius,                   // ES6, don't have to repeat same name
      draw: function() {
        console.log('DRAW CIRCLE');
      }
    };
}

let circle01 = createCircle(5);
circle01.draw();