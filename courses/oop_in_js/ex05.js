// Constructor function

// Similar to a class, but JS doesn't have classes
function Circle(radius){
    this.radius = radius;           // this points to global object 'global' in
    this.draw = function(){         //   node, browser in a browser
        console.log("DRAW (CONSTRUCTOR)")
    }
    this.whichGlobal = function(){
        console.log('THIS: ', this);
    }
}

const circle_01 = new Circle(1);   // new creates new object (not the global obj)
                                   //    assigns new obj to variable
                                   //    returns the object (no return in definition)

circle_01.draw();
circle_01.whichGlobal();
console.log(circle_01.constructor);      // How was this object created

