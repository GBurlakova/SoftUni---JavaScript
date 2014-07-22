function findMaxSequence(value) {
    var maxSequence = new Array();
    var currentSequence = new Array();
    currentSequence[0] = value[0];
    for (var i = 1; i < value.length; i++) {
        if (currentSequence[currentSequence.length - 1] === value[i] || currentSequence.length == 0) {
            currentSequence.push(value[i]);
        } else {
            if (currentSequence.length >= maxSequence.length) {
                maxSequence = currentSequence;
            }
            currentSequence = new Array();
            currentSequence[0] = value[i];
        }
    }

    if (currentSequence.length > maxSequence.length) {
    	maxSequence = currentSequence;
    }

    console.log(maxSequence);
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);