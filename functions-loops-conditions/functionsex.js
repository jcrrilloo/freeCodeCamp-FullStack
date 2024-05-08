/** 
 * Functions: To use a function there must be a relationsship beteen 
 * an input return and a output return
 * 
 * Meaning that in order for a function to work as intended it must take in
 * an input and return a value
 * 
 * You must define it somewhere in the scope from which you wish to call it
 */

// ==== DEFINING FUNCTIONS === //
/**
 * 1. name of the function 
 * 2. list of parameters to the function, enclosed parentheses and seperated by commas
 * 3. Javascript statements that define the function, enclosed in curly braces ' { } '
 */


/**
  function square(number) { // the number is the parameter of the function
    return number * number; // the statement call
}
*/

/**
 * 
 * 
 * function myFunc(theObject){
    theObject.make = "Toyota";
}

const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
}; 

console.log(mycar.make); // Honda
myFunc(mycar); // updates our functions with the object make of the car we updated object with our function
console.log(mycar.make); // prints out the new function object
*/

// == Arrays ==

function myFunc(theArr){
    theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30 
