//challenge 16

//Create a function that will return a Boolean
// specifying if a number is prime


//boolean True and False
//2,3,5,7,11,13,17,19,23....xxx

// 25
//5

function CheckNum(num){
    if (num<= 1){
        return false;
    }
    if (num == 2){
        return true;
    }
    var sqrtNum = Math.sqrt(num);
    for(var i= 2; i<=sqrtNum;i++){
        if (num % i==0){
            return false
        }

        
    }
    
    return true

};

console.log(CheckNum(2));


// 256 

//1,2,4,8,---16-----,32,64,128,256

//174.123
