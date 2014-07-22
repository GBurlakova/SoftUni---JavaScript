function calcCylinderVol(value) {
    var volume = Math.PI * value[0] * value[0] * value[1];
    console.log(volume.toFixed(3));
}

calcCylinderVol([2, 4]);
console.log('\n');
calcCylinderVol([5, 8]);
console.log('\n');
calcCylinderVol([12, 3]);