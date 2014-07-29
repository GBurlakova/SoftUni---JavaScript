function clone(obj) {
    if (obj == null || typeof obj != 'object') {
        return obj;
    }
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)){
            copy[attr] = obj[attr];
        }
    }
    return copy;
}

function compareObjects(obj, objCopy) {
    var areEqualObjects = obj == objCopy;
    if (areEqualObjects) {
        return 'a == b --> true';
    } else {
        return 'a == b --> false';
    }
}

(function(){
    var a = {name: 'Pesho', age: 21}
    var b = clone(a);
    console.log(compareObjects(a, b));
})();


(function(){
    var a = {name: 'Pesho', age: 21} ;
    var b = a;
    console.log(compareObjects(a, b));
})();



