function treeHouseCompare(value) {
    var houseArea = (value[0] * value[0]) + ((value[0] * (value[0] * (2 / 3))) / 2);
    var threeArea = (value[1]) * (value[1] / 3) + (Math.PI * (value[1] * (2 / 3)) * (value[1] * (2 / 3)));
    if (houseArea > threeArea) {
        console.log('house/' + houseArea.toFixed(2));
    } else {
        console.log('three/' + threeArea.toFixed(2));
    }
}

treeHouseCompare([3, 2]);
treeHouseCompare([3, 3]);
treeHouseCompare([4, 5]);

