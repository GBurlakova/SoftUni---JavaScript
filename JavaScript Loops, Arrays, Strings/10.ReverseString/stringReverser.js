function reverseString(value){
    var reversedStr = '';
    for (var i = 0; i < value.length; i++) {
        reversedStr = value[i] + reversedStr;
    }
    console.log(reversedStr);
}

reverseString('sample');
reverseString('softUni');
reverseString('java script');