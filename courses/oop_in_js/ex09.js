
// Encapsulation: Create protected 'classes'

// Closure: function can access local variables AND variables in parent function
// Closure persists.
// Scope is temporary. Each time you call the method, you get new variables

function Circle(radius, location){
    this.radius = radius;

    // Function as a public method
    // this.computeOptimumLocation = function(factor){
    //    Function as a private method
    let computeOptimumLocation = function(factor){
        console.log('COMPUTE OPTIMUM LOCATION: ', factor);
    }

    // this.location = location;     // Original property
    location = location;             // Local variable
    this.draw = function(){
        console.log('DRAW: Factory function');
        computeOptimumLocation(0.1);
    }


}

const circle = new Circle(10, { x:1, y:1});
circle.draw();