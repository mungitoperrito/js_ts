

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('DRAW: Factory function');
    }
}

const circle = new Circle(10);

// Add a property
circle.location = { x:1, y:1};

// Reference the property
//    Both syntax types are equivalent
console.log(circle.location);
console.log(circle['location']);

const propertyName = 'location';
console.log(circle[propertyName]);      // Access properties dynamically



