//challenge 15
// Create a function that will find the nth Fibonacci number using recursion
//series of numbers where each number is the sum of the two preceding numbers
// 0,1,1,2,3,5,8,13,21,34,55,89
//n 9th =34
//f(n) =f(n-1)+ f(n-2)

function fibNum(n){
    if (n==0){
        return 0
    }
    if (n==1){
        return 1
    }
    
    return fibNum(n-2) + fibNum(n-1)
}

console.log(fibNum(4))

//to illustrate 

//                                                fibNum(4)
//                                         /                       \
//                                fibNum(3)                          fibNum(2)
//                              /          \                       /           \
//                     fibNum(2)            fibNum(1)       fibNum(1)           fibNum(0)
//                  /           \              1                1                 0
//         fibNum(1)            fibNum(0)
//           1                    0
