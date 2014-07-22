function checkDigit(value) {
    for (var i = 1; i < 3; i++) {
        value /= 10;
    }
    value = Math.floor(value);
    var thirdDigit = value % 10;
    if (thirdDigit == 3) {
    	return true;
    } else {
    	return false;
    }
}

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));

