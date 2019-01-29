/*

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */




// Takes an array of arrays and returns a single array
// with all the elements of the original arrays
// Referred to MDN web docs regarding how to approach this
// method.
let myArray = [[1, 2, 3], [4, 5], [6]];

function flatten(returnValues, currentValue) {

    return returnValues.concat(currentValue);
}

console.log(myArray.reduce(flatten));

