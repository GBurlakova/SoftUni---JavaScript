function compareChars(firstArr, secondArr){
    var areEqual = true;
    if (firstArr.length == secondArr. length) {
        for (var i = 0; i < firstArr.length; i++) {
            if (firstArr[i] != secondArr[i]) {
            	areEqual = false;
                break;
            }
        }
    } else{
        areEqual = false;
    }

    if (areEqual) {
        console.log('Equal');
    } else {
        console.log('Not Equal');
    }
}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
             ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'],
             ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
             ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r'])