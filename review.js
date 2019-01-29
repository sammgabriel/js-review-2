/*

    Author Name: Samantha Gabriel
    Date: January 28, 2019
    File Name: review.js

    JavaScript Review 2 assignment exercises.

    References:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html

*/

// Compares two objects and returns true if their property
// names and property values are equivalent.
// Referred to A Drip of JavaScript regarding how to approach
// this problem
function objEquals(object1, object2) {

    // Create arrays of property names of each object
    var obj1PropNames = Object.getOwnPropertyNames(object1);
    var obj2PropNames = Object.getOwnPropertyNames(object2);

    // Iterate through object one names
    for (let i = 0; i < obj1PropNames.length; i++) {

        // Return false if property names are not equal
        if (obj1PropNames[i] !== obj2PropNames[i]) {

            return false;
        }

        // Return false if property values are not equal
        if (object1[obj1PropNames[i]] !==
            object2[obj2PropNames[i]]) {

            return false;
        }

    }

    // Return true if everything checks out
    return true;
}

// Create an object
var object = {here: {is: "an"}, object: 2};

// Test cases
console.log(objEquals(object, object));
console.log(objEquals(object, {here: 1, object: 2}));
console.log(objEquals(object, {here: {is: "an"}, object: 2}));
console.log(objEquals(object, {here: {is: "an"}, object: 0}));
console.log(objEquals(object, {here: {is: "another"}, object: 2}));
console.log(objEquals(object, {here: {isnt: "an"}, object: 2}));
console.log(objEquals(object, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));


// Array of arrays
let myArray = [[1, 2, 3], [4, 5], [6]];

// Takes an array of arrays and returns a single array
// with all the elements of the original arrays
// Referred to MDN web docs regarding how to approach this
// method.
function flatten(returnValues, currentValue) {

    return returnValues.concat(currentValue);
}

// Test case
console.log(myArray.reduce(flatten));

