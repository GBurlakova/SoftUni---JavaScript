function biggerThanNeighbors(index,  arr) {
    var index = index;
    var arr = arr;
    var searchedMember = arr[index];
    var leftNeighbor = arr[index + 1];
    var rightNeighbor = arr[index - 1];
    var output = '';
    if (searchedMember > leftNeighbor && searchedMember > rightNeighbor) {
    	output = 'bigger';
    } else if(index == arr.length - 1 || index == 0){
       output = 'only one neighbor';
    } else if (searchedMember == undefined) {
        output = 'invalid index';
    } else if (leftNeighbor >= searchedMember || rightNeighbor >= searchedMember) {
        output = 'not bigger';
    }
    return output;
}

console.log(biggerThanNeighbors(2, [1, 2, 3, 3, 5]));
console.log(biggerThanNeighbors(2, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(5, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(0, [1, 2, 5, 3, 4]));