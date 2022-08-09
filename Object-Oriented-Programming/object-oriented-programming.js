// Create a Basic JavaScript Object
let dog = {
    name: "thorffin",
    numLegs: 2
};

// Use Dot Notation to Access the Properties of an Object
let dogg = {
    name: "Spot",
    numLegs: 4
};
// Only change code below this line
console.log(dogg.name);
console.log(dogg.numLegs);

// Create a Method on an Object
let doggg = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has "+doggg.numLegs+" legs.";
    }
};
doggg.sayLegs();

// Make Code More Reusable with the this Keyword
let dogggg = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
dogggg.sayLegs();

// Define a Constructor Function
function Dog() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

// Use a Constructor to Create Objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();

// Extend Constructors to Receive Arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("Andres", "Black");

// Verify an Objects Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
// Only change code below this line
let myHouse = new House(3);
myHouse instanceof House;

// Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

// Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 2;
// Only change code above this line
let beagle = new Dog("Snoopy");

// Iterate Over All Properties
function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;
  
let beaglee = new Dog("Snoopy");
  
let ownPropss = [];
let prototypeProps = [];
// Only change code below this line
for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownPropss.push(property);
    } else {
      prototypeProps.push(property);
    }
}
//console.log(ownProps);
//console.log(prototypeProps);

// Understand the Constructor Property
function Dog(name) {
    this.name = name;
}
// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
}

// Change the Prototype to a New Object
function Dog(name) {
    this.name = name;
}
Dog.prototype = {
    // Only change code below this line
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

// Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
    this.name = name;
}
// Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};

// Understand Where an Object’s Prototype Comes From
function Dog(name) {
    this.name = name;
}
let beagleee = new Dog("Snoopy");
// Only change code below this line
Dog.prototype.isPrototypeOf(beagleee);

// Understand the Prototype Chain
function Dog(name) {
    this.name = name;
}
let beaglle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beaglle);  // yields true
// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

// Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
    this.name = name;
}
  
Cat.prototype = {
    constructor: Cat,
};
  
function Bear(name) {
    this.name = name;
}
  
Bear.prototype = {
    constructor: Bear,
};
  
function Animal() { }
  
Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
};

// Inherit Behaviors from a Supertype
function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
};
// Only change code below this line
let duck = Object.create(Animal.prototype); // Change this line
let beaggle = Object.create(Animal.prototype); // Change this line

// Set the Childs Prototype to an Instance of the Parent
function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
};
function Dog() { }
// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
let beaagle = new Dog();

// Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Only change code below this line
let ducck = new Bird();
Bird.prototype.constructor = Bird;
let beagglle = new Dog();
Dog.prototype.constructor = Dog;

// Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };
function Dog() { }
// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof!");
};
// Only change code above this line
let beagllee = new Dog();

// Override Inherited Methods
function Bird() { }
Bird.prototype.fly = function() { return "I am flying!"; };
function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
// Only change code below this line
Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird.";
};
// Only change code above this line
let penguin = new Penguin();
console.log(penguin.fly());

// Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};
// Only change code below this line
let glideMixin = function(obj) {
    obj.glide = function() {}
};
glideMixin(bird);
glideMixin(boat);

// Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
    let weight = 15;
    this.getWeight  = function() { 
      return weight;
    };
}

// Understand the Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("A cozy nest is ready");
})();