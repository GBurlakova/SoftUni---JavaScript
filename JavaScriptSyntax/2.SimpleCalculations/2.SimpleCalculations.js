function roundNumber(value) {
    var numFloor = Math.floor(value);
    var numRound = Math.round(value);
    return {numFloor: numFloor, numRound: numRound};
}

console.log(roundNumber(22.7));
console.log(roundNumber(12.3));
console.log(roundNumber(58.7));


