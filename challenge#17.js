//challenge 17
//Calculate the sum of digits of a positive integer number
//678


function sumOfDigits(num){
    if (num <=0){
        return 'not a positive number'
    }

    let numString = num.toString();
    let sum = 0;

    for(let i=0 ; i< numString.length; i++){
        let dig = numString[i];
        let digit =Number(dig);
        sum+=digit;
    }
    return sum;

}
console.log(sumOfDigits(11111))
