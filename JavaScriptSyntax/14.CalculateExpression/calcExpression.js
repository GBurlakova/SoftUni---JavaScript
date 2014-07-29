function checkSymbols(){
    var symbols = ['*', '-', '+', '/', '(', ')', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var input = document.getElementById('input');
    var expression = input.value;
    var hasInvalalidSymbols = symbols.indexOf(expression[expression.length - 1]) > -1 == false;
    var notANumber =  parseInt(expression[expression.length - 1]) == NaN;
    if (hasInvalalidSymbols || notANumber) {
    	alert('Please use correct symbols');
        input.value = expression.substr(0, expression.length - 1);
    }
}

document.getElementById('submit-button').onclick = function(){
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    var expression = input.value;
    var bracketsCount = 0;
    for (var i = 0; i < expression.length; i++) {
        if (expression[i] == '(') {
            bracketsCount += 1;
        }
        if (expression[i] == ')') {
            bracketsCount -= 1;
        }
        if (bracketsCount < 0) {
            break;
        }
    }
    if (bracketsCount != 0) {
        alert('Please check the brackets count');
    }
    var result = eval(expression);
    output.innerHTML = result;
}