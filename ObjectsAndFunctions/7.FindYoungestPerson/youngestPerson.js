function buildPerson(fname, lname, age) {
    return {
        firstname: fname,
        lastname: lname,
        age: age
    }
}

var data = [['George', 'Kolev', 32], ['Bay', 'Ivan', 81], ['Baba', 'Ginka', 40]];
var people = new Array();
for (var i = 0; i < 3; i++) {
    people.push(new buildPerson(data[i][0], data[i][1], data[i][2]));
}

function findYoungestPerson(people) {
    var youngestPersonAge = Number.MAX_VALUE;
    var youngestPersonName = '';
    for (var i = 0; i < people.length; i++) {
        if (people[i].age < youngestPersonAge) {
            youngestPersonAge = people[i].age;
            youngestPersonName = people[i].firstname + ' ' + people[i].lastname;
        }
    }
    console.log('The youngest person is %s', youngestPersonName);
}

findYoungestPerson(people);

