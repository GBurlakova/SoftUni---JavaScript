function isPrime(number){
    var endLoop = Math.sqrt(number);
    var isPrime = true;
    var divider = 2;
    if (number > 1) {
        while (divider <= endLoop) {
            if (number % divider == 0) {
                isPrime = false;
                break;
            }
            divider += 1;
        }
    } else {
    	isPrime = false;
    }

    return isPrime;
}

console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));