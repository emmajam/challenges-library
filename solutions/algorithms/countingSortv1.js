/**
 * https://www.hackerrank.com/challenges/countingsort1/problem
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

function countingSort(arr) {
    const ArrayConstraint = 100
    let arrayPointers = Array.apply(null, Array(ArrayConstraint)).map(Number.prototype.valueOf,0)

    arrayPointers.forEach((value, index) => {
        arr.forEach(item => {
            if (item === index) {
                arrayPointers[index] = arrayPointers[index] + 1
            } 
        })
    })
    return arrayPointers
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = countingSort(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
