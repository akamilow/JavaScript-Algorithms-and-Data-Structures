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