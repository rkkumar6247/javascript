// date object
let todayDate = new Date();
console.log(todayDate);

// proper date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

// proper time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

// USA date
let option =  {timeZone : 'America/New_York'};
let usaDate = new Date().toLocaleDateString('en-US', option);
console.log(`USA Date: ${usaDate}`);

// USA time
option = {timeZone : 'America/New_York'};
let usaTime = new Date().toLocaleTimeString('en-US',option);
console.log(`USA Time: ${usaTime}`);

// today
let today = new Date().getDay();
console.log(`Today is: ${today}`);   // 2
switch(today)
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
console.log(`Today is: ${today}`);

// month
let currentMonth = new Date().getMonth();
console.log(`Current Month is: ${currentMonth}`);   //7
switch(currentMonth)
{
    case 0: today = 'January'; break;
    case 1: today = 'February'; break;
    case 2: today = 'March'; break;
    case 3: today = 'April'; break;
    case 4: today = 'May'; break;
    case 5: today = 'June'; break;
    case 6: today = 'July'; break;
    case 7: today = 'August'; break;
    case 8: today = 'September'; break;
    case 9: today = 'October'; break;
    case 10: today = 'November'; break;
    case 11: today = 'December'; break;
    default: today = 'Enter aproper day'; break;
}
console.log(`Current Month is: ${today}`);


// Custom date
let c_date = new Date().getDate();
let c_month = new Date().getMonth();
let c_year = new Date().getFullYear();

console.log(`Today's Date: ${c_date}-${c_month}-${c_year}`);
console.log(`Today's Date: ${c_date}.${c_month}.${c_year}`);
console.log(`Today's Date: ${c_date}/${c_month}/${c_year}`);