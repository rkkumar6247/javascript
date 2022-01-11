
// if-else
let time = 18;
let wishMessage = '';

if (time >= 1 && time < 12){
    wishMessage = 'Good Morning';
}
else if(time >= 12 && time < 17){
    wishMessage = 'Good After noon';
}
else if(time >= 17 && time <= 24){
    wishMessage = 'Good Evening';
}
else{
    wishMessage = 'Enter a proper time';
}

console.log(wishMessage);

// switch statement
let day = new Date().getDay();

let today = '';
switch(day) 
{
    case 0:
    today = 'Sunday';
    break;
    case 1:
    today = 'Monday';
    break;
    case 2:
    today = 'Tuesday';
    break;
    case 3: today = 'Wednesday'; break;
    case 4: today = 'Thursday'; break;
    case 5: today = 'Friday'; break;
    case 6: today = 'Saturday'; break;
    default: today = 'Enter aproper day'; break;
}

console.log(`Today's day is ${today}`);