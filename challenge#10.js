//challenge 10
//Calculate the sum of numbers in an array of numbers
//[3,5,6,7,8,9]

function sumArray(arr){
    var sum = 0
    for(var i=0 ; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
var call= sumArray([3,5,6,7,8,9])
console.log(call);
