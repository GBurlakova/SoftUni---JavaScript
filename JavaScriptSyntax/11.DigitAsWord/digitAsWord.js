function convertDigitToWord(value) {
    var word;
    switch (value) {
    	case 1: word = 'one'; break;
        case 2: word = 'two'; break;
        case 3: word = 'three'; break;
        case 4: word = 'four'; break;
        case 5: word = 'five'; break;
        case 6: word = 'six'; break;
        case 7: word = 'seven'; break;
        case 8: word = 'eight'; break;
        case 9: word = 'nine'; break;
    	default: word = 'ten'; break;
    }
    console.log(word);
}

for (var i = 1; i <= 10; i++) {
    convertDigitToWord(i);
}
