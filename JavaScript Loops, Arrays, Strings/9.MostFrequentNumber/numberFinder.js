function findMaxSequence(value) {
    value.sort();
    var maxSequence = new Array();
    var currentSequence = new Array();
    currentSequence[0] = value[0];
    for (var i = 1; i < value.length; i++) {
        if (currentSequence[currentSequence.length - 1] == value[i] || currentSequence.length == 0) {
            currentSequence.push(value[i]);
        } else {
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence;
            }
            currentSequence = new Array();
            currentSequence[0] = value[i];
        }
    }

    if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
    }

    var output = maxSequence[0] + ' (' + maxSequence.length + ' times)';
    console.log(output);
}

findMaxSequence([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMaxSequence([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMaxSequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);