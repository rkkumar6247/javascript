/*
Print the values from 0 - 10 difference by 1
*/

let result = ''
for(let i = 0; i<=10; i++){

    if(i<=9){
        result += `${i}, `;
    }
    else{
        result += `${i}`;
    }

}
console.log(result);

/*
    print the value from 20 - 0 diff 2
*/

result = '';
for (let i = 20; i >= 0; i -= 2){
    
if(i > 0){
    result += `${i}, `;
}
else{
    result += `${i}`;
}

}
console.log(result);

/*
*
* *
* * *
* * * *
* * * * *
*/

let number = 5;
result = '';
for(let i =  1; i <= number; i++){
    
    for(let j = 1; j <= i; j++)
    {
        result += `*`;
    }

    result += `\n`;
}
console.log(result);
