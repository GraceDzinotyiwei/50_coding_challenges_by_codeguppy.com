//challenge 13
//Find the maximum number in an array of numbers
//[1,2,0,4,10,5,6,20,7,8,9]
//MaxNum=20


function MyArr(arr){
    var Maxnum = arr[0];
    for(var i = 1; i<arr.length;i++){
        if(arr[i]> Maxnum){
            Maxnum=arr[i]
        }
    }
    return Maxnum
}
console.log(MyArr([1,2,0,4,10,5,6,20,7,8,9]))
