Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

function sumElements(input){
    var number = input.toString();
    if (number.indexOf('.') > -1 || typeof(input) == "string") {
        return undefined;
    } else {
        var sum = 0;
        var digits = number.split('').clean('-');
        for (var i = 0; i < digits.length; i++) {
            sum += parseInt(digits[i]);
        }
        return sum;
    }
}

function findLargestBySumOfDigits(nums) {
    var numbers = nums;
    var maxSum = 0;
    var memberBiggestSum = 0;
    var output = '';
    for (var i = 0; i < numbers.length; i++) {
        var currentSum = sumElements(numbers[i]);
        if (currentSum == undefined) {
            output = undefined;
        	break;
        } else {
        	if (currentSum > maxSum) {
        		maxSum = currentSum;
                memberBiggestSum = numbers[i];
                output = memberBiggestSum;
        	}
        }
    }
    return output;
}

console.log(findLargestBySumOfDigits([5, 10, 15, 111]));
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestBySumOfDigits(['hello']));
console.log(findLargestBySumOfDigits([5, 3.3]));