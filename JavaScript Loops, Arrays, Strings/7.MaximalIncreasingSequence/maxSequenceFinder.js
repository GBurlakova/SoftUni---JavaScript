function findMaxSequence(value) {
    var maxSequence = new Array();
    var currentSequence = new Array();
    currentSequence[0] = value[0];
    for (var i = 1; i < value.length; i++) {
        if (value[i] > currentSequence[currentSequence.length - 1] || currentSequence.length == 0) {
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

    if (maxSequence.length == 1) {
        console.log('no');
    } else {
        console.log(maxSequence);
    }
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);