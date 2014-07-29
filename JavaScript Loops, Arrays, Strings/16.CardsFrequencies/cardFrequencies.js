Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

function findCardFrequency(value) {
    var cards = value.split(/[♥♣♦♠ ]+/).clean('');
    var cardsOccurrenceCount = new Object();
    for (var i = 0; i < cards.length; i++) {
        if ((cards[i] in cardsOccurrenceCount) == false) {
            cardsOccurrenceCount[cards[i]] = 1;
        } else{
            cardsOccurrenceCount[cards[i]] += 1;
        }
    }
    var values = Object.keys(cardsOccurrenceCount).map(function ( key ) { return cardsOccurrenceCount[key]; });
    var total = values.reduce(function(a, b){
        return a + b;
    });
    var quota;
    for(card in cardsOccurrenceCount){
        quota = ((cardsOccurrenceCount[card] / total) * 100).toFixed(2);
        console.log(card + ' -> ' + quota + '%');
    }
}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log('\n');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log('\n');
findCardFrequency('10♣ 10♥');