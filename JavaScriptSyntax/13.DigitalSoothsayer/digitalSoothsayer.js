function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomIndex;
var result = new Array();

function soothsayer(value) {
    for (var i = 0; i < 4; i++) {
        randomIndex = getRandomInt(0, 4);
        result[i] = value[i][randomIndex];
    }
    console.log('You will work ' + result[0] + ' years on ' + result[1] + '.');
    console.log('You will live in ' + result[2] + ' and drive ' + result[3] + '.');
}

soothsayer([[3, 5, 2, 7, 9],
            ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'],
            ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'],
            ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']]);