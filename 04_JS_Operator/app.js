/*
JavaScript Operators
--------------------
-> Assignment Operator: =
-> Arithmetic Operator: + - / * %
-> Short hand Math Operator: += , -= , /= , *= 
-> Conditional Operator: < , > , <= , >=, !==
-> Unary Operator: ++ , --
-> Logical Operator: && , || , ^
-> Ternary Operator: ?:
-> Equality Operator: == , ===

*/

// Assignment Operator: =
let test = 10;
console.log(test);

// Arithmetic Operator: + - / * %
let num1 = 25;
let num2 = 5;
console.log(`Sum: ${num1 + num2}`);
console.log(`Sub: ${num1 - num2}`);
console.log(`Div: ${num1 / num2}`);
console.log(`Mul: ${num1 * num2}`);
console.log(`Mod: ${num1 % num2}`);

// Find the number is even or odd
let firstNumber = 11;
if(firstNumber%2 === 0)
{
    console.log(`${firstNumber} is an Even number`);
}
else{
    console.log(`${firstNumber} is an Odd number`);
}

// Short hand Math Operator: += , -= , /= , *=

let a = 30;
let b = 20;
let add = 10;
// add = add + (a+b); // 10 + (30 + 20) => 60
add += (a+b); // 10 + (30 + 20) => 60
console.log(add); // 60

let multi = 2;
// multi = multi * (a-b); // 2 * (30 -20) => 20
multi *= (a-b); // 2 * (30 -20) => 20
console.log(multi); // 20



// Conditional Operator: < , > , <= , >=, !==
let marks = 50;
if (marks >= 33){
    console.log('You passed the Exam');
}
else{
    console.log('You failed the Exam');
}


// Unary Operator: ++ , --

let x = 10;
x = x + 1;  // 10 + 1 => 11
x += 1; // 11 + 1 => 12
x++;  // 12 + 1 => 13
console.log(x);  // 13

let y = 20;
y = ++y; // 20 + 1 => 21
y++;  // 21 + 1 => 22
console.log(y);  //22

let z = 18;
z--;   // 18-1 => 17
console.log(z);  // 17



// Logical Operator: && , || , ^
/*
   AND => T && T -> T
    OR => F || F -> F
    XOR => T ^ F, F ^ T -> T
*/

let inRelation = true;
let parentsAgreed = false;

if(inRelation && parentsAgreed){
    console.log('Get married soon');
}
else{
    console.log('Wait untill the parent agreed');
}


// Ternary Operator: ?:
/*
    Syntax: (condition) ? true : false;
*/

let age = 20;
let message = '';

(age >= 18) ? message = 'You are eligible for Vote' : message = 'You are not eligible for Vote';

console.log(message);


// Equality Operator: == , ===
let firstNo = 10;
let secondNo = '10';

if(firstNo == secondNo){
    console.log('Both are equal'); // This is the right answer
}
else{
    console.log('Both are not equal');
}

let thirdNo = 20;
let fourthNo = '20';

if(thirdNo === fourthNo){
    console.log('Both are equal');
}
else{
    console.log('Both are not equal');  // This is the right answer
}


