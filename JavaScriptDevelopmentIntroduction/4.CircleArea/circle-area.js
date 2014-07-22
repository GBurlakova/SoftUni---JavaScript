function calcCircleArea(r){
    var s = Math.PI * r * r;
    return s;
}

window.onload = function(){
    var radiusArray = [7, 1.5, 20];
    var outputFields = document.getElementsByTagName('div');
    for (var i = 0; i < radiusArray.length; i++) {
        var currentS = calcCircleArea(radiusArray[i]);
        var outputResult = 'r = ' + radiusArray[i] + '; ' + 'area = ' + currentS;
        outputFields[i].innerHTML = outputResult;
    }
}
