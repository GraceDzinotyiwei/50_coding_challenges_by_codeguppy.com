//challenge 12
//Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
//[-1,2,-3,4,-5,6,-7,8,-9,10]

///////////////////////////////////////////////////////////////////////////////

function ArrAll(arr){
    var PosArr = []
    for ( var i = 0; i< arr.length; i++){
        if (arr[i] > 0){
            PosArr.push(arr[i])
        }
    }
    return PosArr
}

console.log(ArrAll([-1,2,-3,4,-5,6,-7,8,-9,10]))


//or
//////////////////////////////////////////////////////////////////////////////
function ArrAll(arr){
    var PosArr = []
    for ( var i of arr){
        if (i > 0){
            PosArr.push(i)
        }
    }
    return PosArr
}

console.log(ArrAll([-1,2,-3,4,-5,6,-7,8,-9,10]))
