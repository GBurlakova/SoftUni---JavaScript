var divs = document.querySelectorAll('div');
var result = document.getElementById('result');

var fragment = document.createDocumentFragment();
var liElement = document.createElement('li');

for (var div = 0; div < divs.length; div++) {
    if (divs[div] instanceof HTMLDivElement && !(divs[div].classList.contains('empty'))) {
        var currentLi = liElement.cloneNode(true);
        currentLi.textContent = divs[div].innerText;
        fragment.appendChild(currentLi);
    }
}

result.appendChild(fragment);