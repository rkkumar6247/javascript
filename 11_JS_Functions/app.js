
/* -------------------- // Print from 0 - 10 with diff 1 -------------------- */
function printNumber(startNumber, endNumber, increment){
    let result = '';
    for(let i =startNumber; i<=endNumber; i += increment){
        result += `${i} `;
    }
    console.log(result);
}
printNumber(10, 50, 5);  // function call / execution
printNumber(100, 500 , 10); // fuction call / execution


/* --------------------- // Function without parameters --------------------- */
function greet(){
    console.log('Good Morning');
}
greet();


/* ------------------------- // Function expression ------------------------- */
let greetMe = function(){
    console.log('Good Morning');
};

greetMe();

/* ----------------------- // Function with parameters ---------------------- */
let wishMe = function(name , age){
    let message = `Hey ${name}, You are ${age} Years Old.`
    console.log(message);
}
wishMe('Rakesh', 25);

/* ---------------------- // Function with return type ---------------------- */
let sum = function(a, b){
    let result = 2 * (a+b);
    return result;
   
}
let sub = function(a, b){
    let result = b-a;
    return result;
   
}
let output = sum(10 , 20);
let output1 = sub(10 , 20);
console.log(output);
console.log(output1);

/* ----------------- // Function with an object as parameter ---------------- */
let printObject = function(obj){
    console.log(obj);
};
printObject({name:'Rakesh', age:25, designation:'Developer'});

let mobile ={
    brand: 'Apple',
    color: 'Silver',
    price: 42000
   
};
printObject(mobile);

/* ---------------- // Function with an array as a parameter ---------------- */
let printArray = function(array){
    let result = '';
    for(let index in array){
        result += `INDEX: ${index} => VALUE: ${array[index]} \n`;
    }
    console.log(result);
};
printArray([20,30,40]);

let colors = ['White', 'Black', 'Orange', 'Purple'];
printArray(colors);

/* ---------------------- // Function inside an object ---------------------- */
let student = {
    firstName : 'Rakesh',
    lastName : 'Kumar',
    fullName : function(){
        return `${this.firstName} ${this.lastName}`; // Use this keyword for the accessing inner properties of the object
    }
};
console.log(student.fullName());

/* --------------------------- // Nested function --------------------------- */
let outerFn = function(){
    console.log('I am an Outer Function');
    let innerFn = function(){
        console.log('I am an Inner Function');
    };
    innerFn();
};
outerFn();

/* ---------------------------- Twisted Function ---------------------------- */
let twistedFn = function(){
    let name = 'John';
    let printStudent = function(){
        let student = {
            name : 'Rajan',
            age : 23,
            course : 'CSE'
        };
        return student;
    };
    return printStudent;
};
let innerFn = twistedFn();
let studentObj = innerFn();
console.log(studentObj.name);  // Rajan

/* --------------------- Prepare Chiken Curry with the Function --------------------- */
let glassBowl = function(rawChiken, masala){
    // marinating the chiken
    let marinatedChiken = `MIXING (${rawChiken} + ${masala})`;
    return marinatedChiken;
};

let cookBowl = function(marinatedChiken, water){
    // Cooking Logic
    let cookedChiken = `COOKING: (${marinatedChiken} + ${water})`;
    return cookedChiken;
};

let eatingBowl = function(cookedChiken, rice){
    // Eating Logic
    let eating = `EATING: (${cookedChiken} ${rice})`;
    console.log(eating);
};

let rawChiken = '3Kg Chiken';
let masala = 'Garlic, Pepper, Turmuric, Salt';
let marinatedChiken = glassBowl(rawChiken, masala);
let water = '1lt Water';
let cookedChiken = cookBowl(marinatedChiken, water);
let rice = '1Kg Rice';
eatingBowl(cookedChiken, rice);




