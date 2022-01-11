
// Creation of an array
let numbers = [10, 20, 30];
console.log(numbers);

// access the elements of an array
console.log(numbers[0]);  // 10

// access the non-existing elements
console.log(numbers[3]);  // undefined


// Iteration of an array elements
let color = ['White' , 'Black', 'Silver', 'Gold' , 'Purple' , 'Blue'];

// 1. normal for loop
let result = '';
for(let i = 0; i<= color.length-1; i++)
{
    result = result + `${color[i]} `;  // Here i is working for index of array
}
console.log(result);  


// 2. for-in loop upto ES5
result = '';
for(let index in color){
    result += `${color[index]} `;
}
console.log(result);


// 3. for-of loop from ES6
result = '';
for(let colors of color){
    result += `${colors} `;
} 
console.log(result);


// 4. forEach function upto ES5
result = '';
color.forEach(function(colors){
    result += `${colors} `;
});
console.log(result);


// 5. forEach with Arrow function from ES6
result = '';
color.forEach(colors => result += `${colors} `);
console.log(result);


// Array of objects

let employees = [
    {
        id :1,
        name : 'John',
        age : 40,
        designaton : 'Sr. Manager',
        isActive : true
    },
    {
        id :2,
        name : 'Rakesh',
        age : 25,
        designaton : 'Software Developer',
        isActive : true
    },
    {
        id :3,
        name : 'Pankaj',
        age : 27,
        designaton : 'Accountant',
        isActive : false
    },
    {
        id :4,
        name : 'Ranjeet',
        age : 28,
        designaton : 'Field Manager',
        isActive : true
    },
    {
        id :5,
        name : 'Surya',
        age : 32,
        designaton : 'Project Manager',
        isActive : false
    },
]
// access all employees
console.log(employees);

// iterate employees
result = '';
for(let employee of employees){
    result += `${employee.name} `;
}
console.log(result);

// Filter the junior employees : age < 28
console.log(employees);
let juniorEmployee = [];
for(let employee of employees){
    if(employee.age < 28){
        juniorEmployee.push(employee);
    }
}
console.log(juniorEmployee);


// Filter the active employee : isActive = true
let activeEmployee = [];
for(let employee of employees){
    if(employee.isActive === true){
        activeEmployee.push(employee);
    }
}
console.log(activeEmployee);


/* ---------------------------- Function of Array --------------------------- */

// shift() -> remove the first elements from the array
console.log('------------------ Shift() ----------------------');
let technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);


// unshift() -> add the first elements of the array
console.log('------------------ unshift() ----------------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.unshift('node js');
console.log(technologies);


// push() -> add the last element to array
console.log('------------------ push() ----------------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.push('node js');
console.log(technologies);

// pop() -> remove the last element from array
console.log('------------------ pop() ----------------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);

// sort() -> to sort the array in ascending order
console.log('------------------ sort() ----------------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);


// reverse() -> to reverse the array elements
console.log('------------------ reverse() ----------------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

// Use sort() & reverse() for sorting the array in descending order
console.log('------------------ sort() & reverse() ----------------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);


// splice(index, no-of elements) -> it removes all the elements from the given index
console.log('------------------ splice(index) ----------------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.splice(2,2);
console.log(technologies);

// splice(index, 1, replace elements) -> it replace all given elements at the given index
console.log('------------------ splice(index) ----------------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.splice(2,1, 'node js');
console.log(technologies);


// join() -> to join the array elements to string
console.log('------------------ join() ----------------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
let techString = technologies.join(' - ');
console.log(techString);


// split -> to split a string to an array
console.log('------------------ split() ----------------------');
console.log(techString);  // Comes from the above taken variable
let newTechString = techString.split(' - ');
console.log(newTechString);


// filter() -> to filter the array elements
console.log('------------------ filter() ----------------------');
console.log(employees);
juniorEmployee = [];
for(let employee of employees){
    if(employee.age < 28){
        juniorEmployee.push(employee);
    }
}
console.log(juniorEmployee);

// filter employee with age
let jrEmployees = employees.filter(function(eachEmployee){   
        return eachEmployee.age < 28;
});
console.log(jrEmployees);

// filter employee with isActive or not
jrEmployees = employees.filter(function(eachEmployee){   
    return eachEmployee.isActive;
});
console.log(jrEmployees);




