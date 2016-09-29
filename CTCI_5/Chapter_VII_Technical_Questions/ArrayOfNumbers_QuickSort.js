/*
    Application of QuickSort on an array of numbers.
    TODO: REVIEW QuickSort algorithm, be sure that you know how to implement it
    CODE FROM: http://www.algorithmdemos.com/sorting/quickSort.html
*/
'use strict';

const assert = require('assert');

class QuickSort {
    constructor(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    setArray(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    sortByAscendingOrder() {
        return this._quickSort(this.array, 0, this.array.length - 1);
    }
    _quickSort(array, lowIndex, highIndex) {
        return this._quickSort1(array, lowIndex, highIndex);
    }
    _quickSort1(items, left, right) {
        let index = parseInt((left + right) / 2, 10);
        if (items.length > 1) {
            index = this._partition(items, left, right);
            if (left < index - 1) {
                this._quickSort1(items, left, index - 1);
            }
            if (index < right) {
                this._quickSort1(items, index, right);
            }
        }
        return items;
    }

    _partition(items, left, right) {
        const pivot = items[Math.floor((right + left) / 2)];
        let i = left,
            j = right;
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this._swap(items, i, j);
                i++;
                j--;
            }
        }
        return i;
    }
    _swap(items, firstIndex, secondIndex) {
        const temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }
}

module.exports = QuickSort;
