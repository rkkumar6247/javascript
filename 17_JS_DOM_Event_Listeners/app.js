

// Print Message 
let printMessage = (message, backgroundColor) => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = backgroundColor;
    h1Tag.style.padding = '15px';
    h1Tag.style.color = 'white';
    h1Tag.style.boxShadow = '0 0 10px black';
};

// Good morning Button
let gmButton = document.querySelector('#gm-btn');
gmButton.addEventListener('click', function(){
    printMessage('Good Morning', 'orangered');
});

// Good afternoon Button
let gaButton = document.querySelector('#ga-btn');
gaButton.addEventListener('click', function(){
    printMessage('Good Afternoon', 'purple');
});

// Good evening Button
let geButton = document.querySelector('#ge-btn');
geButton.addEventListener('click', function(){
    printMessage('Good Evening', 'orange');
});

// Good night Button
let gnButton = document.querySelector('#gn-btn');
gnButton.addEventListener('click', function(){
    printMessage('Good Night', 'black');
});




