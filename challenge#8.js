//challenge 8
//Create a function that will convert from Celsius to Fahrenheit
//f =(cx 9/5)+32
/*
function celciusToFahrenheit(c){
    var f=(c* (9/5))+32;
    console.log(f)
}
celciusToFahrenheit(10)
*/
function celciusToFahrenheit(c){
    return c* (9/5)+32;
}

var r = celciusToFahrenheit(10)
console.log(r)
