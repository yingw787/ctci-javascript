/*
    Application of InsertionSort on an array of numbers.
    CODE FROM: http://algorithms.openmymind.net/sort/insertionsort.html
*/
'use strict';

const assert = require('assert');

class InsertionSort {
    constructor(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    setArray(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    sortByAscendingOrder() {
        let array = this.array.slice();
        if (array.length <= 1) {
            return array;
        }
        for (let i = 1; i < array.length; ++i) {
            const temp = array[i];
            let j = i - 1;
            for (; j >= 0 && array[j] > temp; --j) {
                array[j + 1] = array[j];
            }
            array[j + 1] = temp;
        }
        return array;
    }
}

module.exports = InsertionSort;
