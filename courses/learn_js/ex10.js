// Classes

// // Old Style
// // Define a constructor function
// let SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
// }
// // Use new to instantiate an instance
// let zeus = new SpaceShuttle('Jupiter');
// console.log(zeus.targetPlanet);


// class keyword
class SpaceShuttle {
    constructor(targetPlanet){
        // _propertyName to make private
        this._targetPlanet = targetPlanet;
    }

    get target(){
        return this._targetPlanet;
    }

    set target(newPlanet){
        this._targetPlanet = newPlanet;
    }
}
let zeus = new SpaceShuttle('Jupiter');

console.log(zeus.target);       // Uses getter
zeus.target = 'Mercury';        // Uses setter
console.log(zeus.target);