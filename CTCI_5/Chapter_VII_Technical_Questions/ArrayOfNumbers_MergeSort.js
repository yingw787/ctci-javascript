/*
    Application of MergeSort on an array of numbers.
*/
'use strict';

const assert = require('assert');

class MergeSort {
    constructor(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    setArray(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    sortByAscendingOrder() {
        return this._recursiveMergeSort(this.array);
    }
    _recursiveMergeSort(array) {
        if (array.length <= 1) {
            return array;
        }
        let left = [];
        let right = [];
        for (let i = 0; i < array.length; i++) {
            if (i % 2 === 1) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
        left = this._recursiveMergeSort(left);
        right = this._recursiveMergeSort(right);
        return this._merge(left, right);
    }
    _merge(leftArray, rightArray) {
        const result = [];
        while (leftArray.length > 0 && rightArray.length > 0) {
            if (leftArray[0] <= rightArray[0]) {
                result.push(leftArray.shift());
            } else {
                result.push(rightArray.shift());
            }
        }
        while (leftArray.length > 0) {
            result.push(leftArray.shift());
        }
        while (rightArray.length > 0) {
            result.push(rightArray.shift());
        }
        return result;
    }
}

module.exports = MergeSort;
