Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

function findNthDigit(arr) {
    var n = parseInt(arr[0]);
    var numberDigits = arr[1].toString().split('').clean('-').clean('.').reverse();
    var output = '';
    if (numberDigits[n - 1] != undefined){
    	output = numberDigits[n - 1];
    } else {
    	output = "The number doesn’t have " + n +  " digits";
    }
    return output;
}

console.log(findNthDigit([1, 6]));
console.log('\n');
console.log(findNthDigit([2, -55]));
console.log('\n');
console.log(findNthDigit([6, 923456]));
console.log('\n');
console.log(findNthDigit([3, 1451.78]));
console.log('\n');
console.log(findNthDigit([6, 888.88]));

