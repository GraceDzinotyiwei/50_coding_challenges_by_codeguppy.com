//challenge 11
//Calculate the average of the numbers in an array of numbers
//avg = sum of numbers/ number of numbers

function sumArray(arr){
    var sum = 0
    var numOfNums= arr.length
    for(var i=0 ; i< numOfNums; i++){
        sum+=arr[i];
    }
    return sum/numOfNums;
}
var call= sumArray([3,5,6,7,8,9])
console.log(call);
