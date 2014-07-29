function checkBrackets(value) {
    var bracketsCount = 0;

    for (var i = 0; i < value.length; i++) {
        if (value[i] == '(') {
            bracketsCount += 1;
        }
        if (value[i] == ')') {
        	bracketsCount -= 1;
        }
        if (bracketsCount < 0) {
        	break;
        }
    }
    if (bracketsCount == 0) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');