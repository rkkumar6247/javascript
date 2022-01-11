/*

 var -> Keyword to declare a variable upto ES5 version 
 let -> keyword to declare a variable from ES6
 a -> variable name / reference variable
 = -> assignment operator
 10 -> value/data
 ; -> end of the statement 

 */

let a = 100;
let b = 5000;
let sum = a+b;

console.log(sum);
console.log('The sum of a and b is '+ sum);

// ES6 ->   Template string / template literal (``) back tick

console.log(`The sum of a and b is: ${sum} `);   // -> ES6

console.log(`The sum of ${a} and ${b} is: ${sum} `);   // -> ES6

// Rules in Declaring variables

let name = 'Rakesh';
console.log(Name); // error: Name is not defined

let yourName = 'Rakesh';
let yourName = 'John';
console.log(yourName);  // Error: Identifier 'yourName' has already been declared


let yourAge = 25;
console.log(yourAge);  // Answer will be 25
yourAge = 30; // it will replicate the first value with current value
console.log(yourAge); // Answer will be 30


