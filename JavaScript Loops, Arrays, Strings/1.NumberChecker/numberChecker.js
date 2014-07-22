function printNumbers(n){
    var result = 0;
    if (n >= 1) {
        for (var i = 1; i <= n; i++) {
            if (i != n) {
                if (i % 4 != 0 && i % 5 != 0) {
                    result = result + i + ', ';
                }
            } else {
                if (i % 4 != 0 && i % 5 != 0) {
                    result = result + i;
                }
            }
        }
        console.log(result);
    } else {
        console.log('no');
    }
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);
