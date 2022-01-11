/*
JS Data Types
---------------

The types of data which we can assign to a variable.

1) Number -> any type of number
2) String -> any text data
3) Boolean -> true, false
4) undefined
5) null

*/

// String
let employeeName = 'John';  // You can also write value in double quote
console.log(employeeName);  // John
console.log(`Value: ${employeeName}, Type: ${typeof employeeName}`); // Value: John Type: string

let employeeCode = 'AD1094';
console.log(employeeCode);   //AD1094

//number
let employeeAge = 25;
console.log(`Value: ${employeeAge} Type: ${typeof employeeAge}`);  // Value: 25 Type: number

let studentMarks = 87.54;
console.log(`Value: ${studentMarks} Type: ${typeof studentMarks}`);  // Value: 87.54 Type: number

//Boolean
let isManager = true;
console.log(`Value: ${isManager} Type: ${typeof isManager}`);  // Value: true Type: boolean


//Undefined
let myName, Age;  // Variable declaration 

myName = 'Rakesh'; // Assignment of variable

console.log(myName); // Rakesh
console.log(Age);  // undefined
console.log(`Value: ${Age} Type: ${typeof Age}`);  // Value: undefined Type: undefined


//null (dummy value)
let test = null;
console.log(`Value: ${test} Type: ${typeof test}`);  // value: null Type: object


//Re-Assignment is allowed
let abc;
abc = 10;
abc = 'test';
console.log(`Value: ${abc} Type: ${typeof abc}`);  // Value: test Type: string

let xyz;
xyz = 10;
xyz = 'test';
xyz = true;
xyz = null;
console.log(`Value: ${xyz} Type: ${typeof xyz}`); // Value: null Type: object



