Array.prototype.removeItem = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(arr);
arr = arr.removeItem(1);
console.log(arr);

console.log('\n');

var arrSecond = ['hi', 'bye', 'hello' ];
console.log(arrSecond);
arrSecond.removeItem('bye');
console.log(arrSecond);

