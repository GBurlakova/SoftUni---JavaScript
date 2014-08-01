var input = document.getElementById('user-input');

function check() {
    var inputContent = input.value;
    var regex = /\D/g;
    if (regex.test(inputContent)) {
        error();
        input.value = inputContent.replace(regex, '');
    }
}

function changeBackgroundColor(color) {
    input.style.backgroundColor = color;
}

function error() {
    changeBackgroundColor('#F00');
    setTimeout(function(){changeBackgroundColor('#FFF');}, 200);
}
