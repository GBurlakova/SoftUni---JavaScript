var output = document.getElementById('mouse-coordinates');
var mouse = { x: 0, y: 0 };

document.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;
    output.innerText = 'X: ' + mouse.x + '\n' + ' Y: ' + mouse.y;
}, false);