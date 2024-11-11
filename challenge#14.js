//challenge 14
//Print the first 10 Fibonacci numbers without recursion
//series of numbers where each number is the sum of the two preceding numbers
// 0,1,1,2,3,5,8,13,21,34,55,89


function FibNums(){
    var a =0;
    var b =1;
    console.log(a)
    console.log(b)
    for(var i =0; i<8; i++){
        var c = a+b;
        console.log(c);
        a = b;
        b= c;
    }
}
FibNums();
