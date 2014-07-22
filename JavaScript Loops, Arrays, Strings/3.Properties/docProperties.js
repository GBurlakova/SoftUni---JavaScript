function displayProperties() {
    var properties = [];
    for (var prop in document) {
        properties.push(prop);
    }

    properties.sort();

    console.log(properties.join('\n'));
}

displayProperties();