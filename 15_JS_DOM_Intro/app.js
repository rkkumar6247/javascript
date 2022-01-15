// document
console.log(document);

// head section
console.log(document.head);

// title
console.log(document.title);

// change the title
document.title = 'New Changed Title by DOM';

// body
console.log(document.body);

// nav
let navTag = document.querySelector('nav');
console.log(navTag);

// ancher tag of the navbar
let ancherTag = document.querySelector('nav a');
console.log(ancherTag);

// ancher tag text (inner text)
let theText = ancherTag.innerText; // let theText = document.queryselector('nav a').innerText;
console.log(theText);

// change the inner text
ancherTag.innerText = 'Changed Ancher Text by DOm';

// h1 tag access
let h1Tag = document.querySelector('#msg');
h1Tag.innerText = 'Good Evening';
console.log(h1Tag);

// styles
h1Tag.style.backgroundColor = 'limegreen';
h1Tag.style.color = 'white';
h1Tag.style.textAlign = 'center';
h1Tag.style.padding = '50px';
h1Tag.style.fontSize = '60px';
h1Tag.style.boxShadow = '0 0 10px black';


