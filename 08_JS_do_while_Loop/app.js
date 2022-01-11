/*
Print the values from 0 - 10 difference by 1
*/

let result = '';
let i = 0;  
do{

    if (i <= 9){     
        result += `${i}, `;
    }
    else{
        result += `${i}`;
    }

    i++;   

}
while(i<=10);
console.log(result);