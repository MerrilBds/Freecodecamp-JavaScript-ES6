/*
ES6 provides a new syntax to create objects, using the class keyword.

In ES5, an object can be created by defining a constructor function 
and using the new keyword to instantiate the object.

In ES6, a class declaration has a constructor method that is invoked with the new keyword. 
If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
*/

class Vegetable {
    constructor(name) {
        this.name = name;
    }
}



const carrot = new Vegetable('carrot');
console.log(carrot.name); 