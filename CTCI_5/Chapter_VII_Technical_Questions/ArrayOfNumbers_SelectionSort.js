/*
    Application of SelectionSort on an array of numbers.
*/
'use strict';

const assert = require('assert');

class SelectionSort {
    constructor(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    setArray(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    sortByAscendingOrder() {
        return this._selectionSort(this.array);
    }
    _selectionSort(array) {
        if (array.length <= 1) {
            return array;
        }
        for (let i = 0; i < array.length; i++) {
            let maximumElement = -Infinity;
            let maximumElementIndex = 0;
            for (let j = i; j < array.length; j++) {
                if (array[j] > maximumElement) {
                    maximumElement = array[j];
                    maximumElementIndex = j;
                }
            }
            array.splice(maximumElementIndex, 1);
            array.unshift(maximumElement);
        }
        return array;
    }
}

module.exports = SelectionSort;
