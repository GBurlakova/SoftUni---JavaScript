function parse(number){
    if (number == undefined) {
    	return 0;
    } else {
        var numberParsed = parseInt(number);
        return numberParsed;
    }
}

function sumHugeNumbers(args){
    var firstNumber =  args[0].split('').reverse().join('');
    var secondNumber = args[1].split('').reverse().join('');
    var newNumberArr = new Array();
    var length = 0;
    var additionalUnits = 0;
    if (firstNumber.length > secondNumber.length || firstNumber.length == secondNumber.length) {
    	length = firstNumber.length;
    } else {
        length = secondNumber.length;
    }
    for (var i = 0; i < length; i++) {
        var resultDigit = parse(firstNumber[i]) + parse(secondNumber[i]) + additionalUnits;
        var currentDigit = resultDigit;
        if (resultDigit >= 10) {
        	currentDigit = resultDigit % 10;
            additionalUnits = 1;
        } else {
        	additionalUnits = 0;
        }
        newNumberArr.push(currentDigit);
    }
    var newNumber = newNumberArr.reverse().join('');
    return newNumber;
}

console.log(sumHugeNumbers(['155', '65']));
console.log(sumHugeNumbers(['123456789', '123456789']));
console.log(sumHugeNumbers(['887987345974539','4582796427862587']));
console.log(sumHugeNumbers(['347135713985789531798031509832579382573195807', '817651358763158761358796358971685973163314321']));