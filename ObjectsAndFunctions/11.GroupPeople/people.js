function Person(fname, lname, age) {
    return {
        firstname: fname,
        lastname: lname,
        age: age,
        toString: function(){return this.firstname + ' ' + this.lastname + '(age ' + this.age + ')';}
    }
}

var people = [];
people.push(new Person("Scott", "Guthrie", 38));
people.push(new Person("Scott", "Johns", 36));
people.push(new Person("Scott", "Hanselman", 39));
people.push(new Person("Jesse", "Liberty", 57));
people.push(new Person("Jon", "Skeet", 38));
console.log('Ungrouped People: \n');
console.log(people.toString());
console.log('\n');

function group(object, groupTerm){
    var objectGrouped = [];
    for (var i = 0; i < object.length; i++) {
        var key = object[i][groupTerm];
        if (objectGrouped.hasOwnProperty(key) == false) {
            objectGrouped[key] = [];
            objectGrouped[key].push(object[i]);
        } else {
            objectGrouped[key].push(object[i]);
        }
    }
    return objectGrouped;
}

function print(obj){
    var output = '';
    for(var key in obj){
        output += 'Group ' + key + ': [' + obj[key];
        output += ']\n';
    }
    output = output.split('').slice(0, output.length - 1).join('');
    console.log(output);
}

var groupedPeopleByFirstName = group(people, 'firstname');
print(groupedPeopleByFirstName);
console.log('\n');

var groupedPeopleByLastName = group(people, 'lastname');
print(groupedPeopleByLastName);
console.log('\n');

var groupedPeopleByLastAge = group(people, 'age');
print(groupedPeopleByLastAge);

