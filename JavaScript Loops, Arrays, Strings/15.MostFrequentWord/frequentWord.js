Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

function sortObject(o) {
    var sorted = {},
        key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}

function findMostFreqWord(value){
    var words = value.toLowerCase().split(/\W+/).clean('');
    var wordsOccurrenceCount = new Object();
    for (var i = 0; i < words.length; i++) {
        if ((words[i] in wordsOccurrenceCount) == false) {
        	wordsOccurrenceCount[words[i]] = 1;
        } else{
            wordsOccurrenceCount[words[i]] += 1;
        }
    }
    wordsOccurrenceCount = sortObject(wordsOccurrenceCount);
    var values = Object.keys( wordsOccurrenceCount ).map(function ( key ) { return wordsOccurrenceCount[key]; });
    var max = Math.max.apply( null, values );
    for(word in wordsOccurrenceCount){
        if (wordsOccurrenceCount[word] == max) {
            console.log(word + ' -> ' + max + ' times');
        }
    }
}

findMostFreqWord('in the middle of the night');
console.log('\n');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
console.log('\n');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');