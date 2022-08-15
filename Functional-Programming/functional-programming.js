// Learn About Functional Programming
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
    const teaCups = []; 
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
};
// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line

// Understand Functional Programming Terminology
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';
// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTeea = (prepareTea, numOfCups) => {
    const teaCups = []; 
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
};
// Only change code below this line
const tea4GreenTeamFCC = getTeea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTeea(prepareBlackTea, 13);
// Only change code above this line
console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// Understand the Hazards of Using Imperative Code
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};
// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};
  
// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {
    // Only change code below this line
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
    // Only change code above this line
    return this;
};
// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// Avoid Mutations and Side Effects Using Functional Programming
// The global variable
let fixedValue = 4;
function incrementer() {
    // Only change code below this line
    return fixedValue + 1;
    // Only change code above this line
}

// Pass Arguments to Avoid External Dependence in a Function
// The global variable
let fixeddValue = 4;
// Only change code below this line
function incrementer(arg) {
    return arg + 1;
    // Only change code above this line
}