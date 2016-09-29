/*
    Application of BubbleSort on an array of numbers.
*/
'use strict';

const assert = require('assert');

class BubbleSort {
    constructor(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    setArray(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    sortByAscendingOrder() {
        if (this.array.length <= 1) {
            return this.array;
        }
        for (;;) {
            let swapped = false;
            for (let i = 0; i < this.array.length - 1; i++) {
                if (this.array[i] > this.array[i + 1]) {
                    const temp = this.array[i + 1];
                    this.array[i + 1] = this.array[i];
                    this.array[i] = temp;
                    swapped = true;
                }
            }
            if (!swapped) {
                break;
            }
        }
        return this.array;
    }
}

module.exports = BubbleSort;
