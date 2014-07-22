function extractContent(value) {
    document.write(value);
    var elements = document.body.getElementsByTagName('*');
    var output = '';
    for (var element = 0; element < elements.length; element++) {
        output += elements[element].innerHTML;
    }
    console.log(output);
}

window.onload = extractContent('<p>Hello</p><a href=\'http://w3c.org\'>W3C</a>');