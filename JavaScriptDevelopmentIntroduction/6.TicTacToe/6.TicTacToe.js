var boxesFilled;
var symbols;
var winningCombinations;
var turn = 0;
var box;
var c;
var cxt;
var boxesCount = 0;
var y;

window.onload = function() {
    boxesFilled = new Array();
    symbols = new Array();
    winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    for(var l = 0; l <= 8; l++) {
        boxesFilled[l] = false;
        symbols[l] = '';
    }
}

function boxClicked(boxNumber) {
    box = 'box' + boxNumber;
    c = document.getElementById(box);
    cxt = c.getContext("2d");

    if(boxesFilled[boxNumber-1] == false) {
        if (turn % 2 == 0) {
            cxt.beginPath();
            cxt.moveTo(10,10);
            cxt.lineTo(60,60);
            cxt.moveTo(60,10);
            cxt.lineTo(10,60);
            cxt.strokeStyle= 'rgb(255,91,91)';
            cxt.stroke();
            cxt.closePath();
            symbols[boxNumber-1] = 'X';
        } else {
            cxt.beginPath();
            cxt.arc(35,35,30,0,Math.PI*2, true);
            cxt.strokeStyle= 'rgb(87,108,147)';
            cxt.stroke();
            cxt.closePath();
            symbols[boxNumber-1] = 'O';
        }

        turn++;
        boxesFilled[boxNumber-1] = true;
        boxesCount++;
        checkForWinners(symbols[boxNumber-1]);

        if(boxesCount == 9) {
            alert("Game Over");
            location.reload(true);
        }
    }
    else {
        alert("This box is not empty.");
    }
}

function checkForWinners(symbol) {
    for (var a = 0; a < winningCombinations.length; a++) {
        if (symbols[winningCombinations[a][0]] == symbol &&
            symbols[winningCombinations[a][1]] == symbol &&
            symbols[winningCombinations[a][2]] == symbol) {
            alert(symbol + " won!");
            playAgain();
        }
    }
}

function playAgain() {
    y = confirm("Play again?");
    if (y == true) {
        location.reload(true);
    } else {
        window.close();
    }
}