var button = document.getElementById('like-unlike');
button.onclick = function(){
    if (button.innerText == 'Like') {
        button.innerText = 'Unlike';
    } else {
        button.innerText = 'Like';
    }
};