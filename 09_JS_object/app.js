
// Javascript object

let camera = {
    brand : 'Canon',
    price : 35000,
    color : 'Black',
    mfg : 2020
};
console.log(camera);

// access the properies of the object
console.log(camera.color);  // Black

//access the non-existing properties
console.log(camera.megaPixel);  //undefined

//access the proprties using dot (.) , [] notation
console.log(camera.price);  // 35000
console.log(camera['price']);  // 35000


// for dynamic properties dot , [] notation
let prop = 'mfg';
console.log(camera.prop);  // undefined
console.log(camera[prop]); // 2020

// Nested object
let student = {
    name : 'Rakesh',
    age : 25,
    course : 'MCA',
    address : {
        house : 'H17A',
        block : 'H Block',
        city : 'Laxminagar',
        pin : 110092
    }

};
// Access the nested object
console.log(student.address);

// access the properties of nested object
console.log(student.address.city);

// CRUD operation with an object


// CREATE operation
let mobile = {};

mobile.brand = 'Apple';
mobile.color = 'Silver';
mobile.price = 58000;
mobile.isInsured = false;

console.log(mobile);

// READ operation
console.log(mobile.brand);  // Apple

// UPDATE operation
console.log(mobile.price); // 58000

mobile.price = 60000;
console.log(mobile);

// DELETE operation
delete mobile.isInsured;
console.log(mobile);
