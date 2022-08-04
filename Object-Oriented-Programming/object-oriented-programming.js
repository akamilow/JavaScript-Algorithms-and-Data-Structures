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