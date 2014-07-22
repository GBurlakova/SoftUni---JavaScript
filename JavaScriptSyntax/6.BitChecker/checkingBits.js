function bitChecker(value){
    var checker = 1 << 3;
    var result = value & checker;
    var thirdBitOne = true;
    if (result == checker) {
        thirdBitOne = true;
    } else {
    	thirdBitOne = false;
    }
    return thirdBitOne;
}

console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));