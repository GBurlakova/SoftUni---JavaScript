Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomCase(value){
    var chars = value.split('');
    var toCase = 0;
    for (var i = 0; i < chars.length; i++) {
        toCase = getRandomInt(1, 2);
        if (toCase == 1) {
        	chars[i] = chars[i].toLowerCase();
        } else {
            chars[i] = chars[i].toUpperCase();
        }
    }
    return chars.join('');
}
function fixCasing(value) {
    var words = value.split(/[<>/]+/).clean('').map(function(word){return word.trim()});
    var output = words.join(' ');
    var toCase = 0;
    var tagOpened = false;
    for (var i = 0; i < words.length; i++) {
        switch (words[i]) {
        	case 'mixcase': toCase = 1; tagOpened = !tagOpened; break;
            case 'upcase': toCase = 2; tagOpened = !tagOpened; break;
        	case 'lowcase': toCase = 3; tagOpened = !tagOpened; break;
        }

        if (toCase == 1) {
            if (tagOpened == true && words[i] != 'mixcase') {
                words[i] = randomCase(words[i]);
            }

        } else if (toCase == 2) {
            if (tagOpened == true && words[i] != 'upcase') {
            	words[i] = words[i].toUpperCase();
            }

        } else if (toCase == 3) {
            if (tagOpened == true && words[i] != 'lowcase') {
                words[i] = words[i].toLowerCase();
            }
        }

    }
    output = words.clean('mixcase').clean('upcase').clean('lowcase').join(' ');
    output = output.split(' ');
    for (var ch = 0; ch < output.length; ch++) {
        if (output[ch] == '.') {
        	output[ch - 1] += '.';
            output[ch] = '';
        }
    }
    output = output.clean('');
    console.log(output.join(' '));
}

fixCasing('We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.');