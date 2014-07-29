function lastDigitAsText(number) {
    var input = Math.abs(number);
    var lastDigit = input % 10;
    var lastDigitWord = '';
    switch (lastDigit) {
    	case 1: lastDigitWord = 'One'; break;
        case 2: lastDigitWord = 'Two'; break;
        case 3: lastDigitWord = 'Three'; break;
        case 4: lastDigitWord = 'Four'; break;
        case 5: lastDigitWord = 'Five'; break;
        case 6: lastDigitWord = 'Six'; break;
        case 7: lastDigitWord = 'Seven'; break;
        case 8: lastDigitWord = 'Eight'; break;
        case 9: lastDigitWord = 'Nine'; break;
    }
    return lastDigitWord;
}

console.log(lastDigitAsText(6));
console.log('\n');
console.log(lastDigitAsText(-55));
console.log('\n');
console.log(lastDigitAsText(133));
console.log('\n');
console.log(lastDigitAsText(14567));

