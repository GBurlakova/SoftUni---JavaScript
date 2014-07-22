Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

function findPalindromes(value) {
    var words = value.split(/\W+/);
    var wordReversed;
    var output = new Array();
    for (var i = 0; i < words.length; i++) {
        wordReversed = words[i].split("").reverse().join("").toLowerCase();
        if (words[i].toLowerCase() == wordReversed) {
        	output.push(words[i]);
        }
    }

    output = output.clean('').join(', ');
    console.log(output);
}

findPalindromes('There is a man, his name was Bob.');