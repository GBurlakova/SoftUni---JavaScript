function reverseWordsInString(str) {
    var input = str;
    var words = str.split(' ');
    var output = '';
    for (var i = 0; i < words.length; i++) {
        output += words[i].split('').reverse().join('') + ' ';
    }
    output = output.split('').slice(0, output.length - 1).join('');
    return output;
}

console.log(reverseWordsInString('Hello, how are you.'));
console.log(reverseWordsInString('Life is pretty good, isn’t it?'));