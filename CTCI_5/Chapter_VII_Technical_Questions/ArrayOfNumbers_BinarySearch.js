/*
    Application of BinarySearch on an array of numbers.
*/
'use strict';

const assert = require('assert');

class BinarySearch {
    constructor(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    setArray(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    binarySearch(value) {
        const array = this.array.slice();
        let lowIndex = 0;
        let highIndex = array.length - 1;
        let middleIndex;
        while (lowIndex <= highIndex) {
            middleIndex = Math.floor((lowIndex + highIndex) / 2);
            if (array[middleIndex] < value) {
                lowIndex = middleIndex + 1;
            } else if (array[middleIndex] > value) {
                highIndex = middleIndex - 1;
            } else {
                return middleIndex;
            }
        }
        return -1;
    }
    binarySearchRecursive(value) {
        return this._recursiveBinarySearch(this.array.slice(), value, 0, this.array.length - 1);
    }
    _recursiveBinarySearch(array, value, lowIndex, highIndex) {
        if (lowIndex > highIndex) { return -1; }
        const middleIndex = Math.floor((lowIndex + highIndex) / 2);
        if (array[middleIndex] < value) {
            return this._recursiveBinarySearch(array, value, middleIndex + 1, highIndex);
        } else if (array[middleIndex] > value) {
            return this._recursiveBinarySearch(array, value, lowIndex, middleIndex - 1);
        } else {
            return middleIndex;
        }
    }
}

module.exports = BinarySearch;
