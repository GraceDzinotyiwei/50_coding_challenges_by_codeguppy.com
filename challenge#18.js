//challenge 18
//Print the first 100 prime numbers


function numberPrimes(){

    let count = 1
    let num =3
    let primeList=[2]

    while (count<100){
        let isprime = true
        let sqrtNum = Math.sqrt(num);
       
        for(let i= 2; i<=sqrtNum;i++){
            if (num % i==0){
                isprime = false
                break
            }

        }
        if (isprime){
            primeList.push(num)
            count++
        }

        num++
    }

    return primeList
}


console.log(numberPrimes())

