function printNumbers(n){
    var result = new Array();
    if (n >= 1) {
        for (var i = 1; i <= n; i++) {
            if (i % 4 != 0 && i % 5 != 0) {
                result.push(i);
            }

        }
        console.log(result.join(', '));
    } else {
        console.log('no');
    }
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);
