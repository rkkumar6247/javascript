/*
Print the values from 0 - 10 difference by 1
*/

let result = '';
let i = 0;   // initialization
while(i <= 10)  // condition
{

    if (i <= 9){      // statement
        result += `${i}, `;
    }
    else{
        result += `${i}`;
    }

    i++;   // increament/decreament

}
console.log(result);