function calcSupply(value) {
    var foodAmound = ((value[1] - value[0]) * 365) * value[2];
    var food = ['pasta', 'tomatoes', 'peaches'];
    for (var i = 0; i < food.length; i++) {
        var output = foodAmound + 'kg of ' + food[i] +  ' would be enough\nuntil I am ' + value[1] + ' years old.';
        console.log(output);
    }
}

calcSupply([38, 118, 0.5]);
console.log('\n');
calcSupply([20, 87, 2]);
console.log('\n');
calcSupply([16, 102, 1.1]);