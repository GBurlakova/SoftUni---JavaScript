String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

function replaceATag(value) {
    value = value.replace(/<a/g, '[URL');
    value = value.replace(/<\/a>/g, '[/URL]');
    for (var i = 0; i < value.length; i += 1) {
       if (value[i] == '[') {
           var j = i + 1;
           while (value[j] != ']') {
               if (value[j] == '>') {
                   value = value.replaceAt(j, ']');
               }
               j += 1;
           }
       }
    }

    console.log(value);
}

replaceATag("<ul> <li> <a href=http://softuni.bg>SoftUni</a> </li> </ul>");