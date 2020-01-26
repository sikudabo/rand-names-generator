const path = require('path');
const fs = require('fs');
var randNamesJson = fs.readFileSync(path.join(__dirname, 'starwars-names.json'));
const randNamesArray = JSON.parse(randNamesJson);

function generateName(arr) {
    let min = 0;
    let max = arr.length;
    return arr[parseInt((Math.random() * (max - min)) + min)];
}

console.log(generateName(randNamesArray));
