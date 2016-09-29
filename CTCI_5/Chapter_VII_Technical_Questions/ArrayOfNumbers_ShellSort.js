/*
    Application of ShellSort on an array of numbers.
    CODE FROM: http://excode.io/code/40/shell-sort/javascript
*/
'use strict';

const assert = require('assert');

class ShellSort {
    constructor(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    setArray(array) {
        assert(typeof array === 'object');
        this.array = array;
    }
    sortByAscendingOrder() {
        const array = this.array.slice();
        let increment = array.length / 2;
        while (increment > 0) {
            for (let i = increment; i < array.length; i++) {
                let j = i;
                const temp = array[i];
                while (j >= increment && array[j - increment] > temp) {
                    array[j] = array[j - increment];
                    j = j - increment;
                }
                array[j] = temp;
            }
            if (increment === 2) {
                increment = 1;
            } else {
                increment = parseInt((increment * 5 / 11), 10);
            }
        }
        return array;
    }
}

module.exports = ShellSort;
