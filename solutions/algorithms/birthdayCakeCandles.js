/**
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function calcBirthdayCakeCandles(ar) {
    let sum = 0
    let highest = Math.max(...ar)
    sum = ar.filter(candle => { 
        return candle === highest
    }).length
    return sum
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = calcBirthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}
