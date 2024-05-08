// 1:46:42 - 5 Beginner JS Challenges
// 1: Create a boolean variable called 'myBoolean' and set it to 'true'
// 2: Create a string variable called 'myString' and set it to 'hello world'
// 3: Create a number variable called 'firstNumber' and set it equal to '20
// 4: Create another number variable called 'secondNumber' and set it equal to '40'
// 5: re-assign 'secondNumber' and set it equal to '80'
// 6: Create an array called 'myArray' and put 'myBoolean' at index 0, and 'myString' at index 1
/*
7: Create an object caled 'myObject' and assign 'myArray' to a property called 'firstProperty'
and the sum of 'firstNumber' and 'secondNumber' to a property called 'sumProperty'
*/
// 8: Print 'myObject' to the console 
// 9: print the sumProperty of 'myObject' to the console
// 10: Print the value at index of 'firstProperty'

const myBoolean = true;

const myString = 'hello world';

const firstNumber = 20;

let secondNumber = 40; // assigned new value later on 

secondNumber = 80;
const myArray = [myBoolean, myString]

const myObject = {
    firstProperty: myArray, 
    sumProperty: firstNumber + secondNumber
};
console.log(myObject);
console.log(sumProperty);
consolelog(myObject.firstProperty[1]);
