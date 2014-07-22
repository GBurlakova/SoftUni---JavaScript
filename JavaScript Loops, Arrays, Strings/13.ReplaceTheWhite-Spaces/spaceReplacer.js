function replaceSpaces(value) {
    var regExp = new RegExp(" ", 'g');
    var output = value.replace(regExp, '');
    console.log(output);
}

replaceSpaces('But you were living in another world tryin\' to get your message through');