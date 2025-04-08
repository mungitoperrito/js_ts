// Creating objects

// Object literals
// Object literal syntax     const circle = {};
// Avoid var. Use let (can be reassigned) or const (cannot be reassigned)

const circle = {
    radius: 1,                                   // Member variable (property)
    location: {                                  // Member variable (property)
        x: 1,
        y: 1
    },

    draw: function(){                           // Member function (method)
        console.log('DRAW CIRCLE');
    }
};


circle.draw();                                 // Output is console log
