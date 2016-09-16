/*
    Describe how you could use a single array to implement three stacks.
*/
'use strict';

// Looked at book and online for solutions, not brute force
// TODO: Review book logic about threeStacksUsingArray

class StackTracer {
    constructor() {
        this.stackOneBeginIndex = undefined;
        this.stackOneEndIndex = undefined;
        this.stackTwoBeginIndex = undefined;
        this.stackTwoEndIndex = undefined;
        this.stackThreeBeginIndex = undefined;
        this.stackThreeEndIndex = undefined;
    }
    getStackBeginIndex(stackNumber) {
        switch (stackNumber) {
            case 1:
                return this.stackOneBeginIndex;
            case 2:
                return this.stackTwoBeginIndex;
            case 3:
                return this.stackThreeBeginIndex;
            default:
                throw new Error('invalid stack number, must be 1, 2, or 3.');
        }
    }
    getStackEndIndex(stackNumber) {
        switch (stackNumber) {
            case 1:
                return this.stackOneEndIndex;
            case 2:
                return this.stackTwoEndIndex;
            case 3:
                return this.stackThreeEndIndex;
            default:
                throw new Error('invalid stack number, must be 1, 2, or 3.');
        }
    }
    setStackBeginIndex(stackNumber, index) {
        switch (stackNumber) {
            case 1:
                this.stackOneBeginIndex = index;
                break;
            case 2:
                this.stackTwoBeginIndex = index;
                break;
            case 3:
                this.stackThreeBeginIndex = index;
                break;
            default:
                throw new Error('invalid stack number, must be 1, 2, or 3.');
        }
    }
    setStackEndIndex(stackNumber, index) {
        switch (stackNumber) {
            case 1:
                this.stackOneEndIndex = index;
                break;
            case 2:
                this.stackTwoEndIndex = index;
                break;
            case 3:
                this.stackThreeEndIndex = index;
                break;
            default:
                throw new Error('invalid stack number, must be 1, 2, or 3.');
        }
    }
}

class threeStacksUsingArray {
    constructor() {
        this.stackArray = [];
        this.stackTracer = new StackTracer();
    }
    pop(stackNumber) {
        const endIndex = this.stackTracer.getStackEndIndex(stackNumber);
        const resultValue = this.stackArray[endIndex];
        this.stackArray.splice(endIndex, 1);
        this.stackTracer.setStackEndIndex(stackNumber, endIndex - 1);

        for (let i = 1; i <= 3; i++) {
            if (this.stackTracer.getStackBeginIndex(i) > endIndex) {
                this.stackTracer.setStackBeginIndex(i, this.stackTracer.getStackBeginIndex(i) - 1);
                this.stackTracer.setStackEndIndex(i, this.stackTracer.getStackEndIndex(i) - 1);
            }
        }

        return resultValue;
    }
    push(stackNumber, item) {
        if (this.stackTracer.getStackBeginIndex(stackNumber) === undefined) {
            this.stackArray.push(item);
            this.stackTracer.setStackBeginIndex(stackNumber, this.stackArray.length - 1);
            this.stackTracer.setStackEndIndex(stackNumber, this.stackArray.length - 1);
        } else {
            const endIndex = this.stackTracer.getStackEndIndex(stackNumber);
            this.stackArray.splice(endIndex + 1, 0, item);
            this.stackTracer.setStackEndIndex(stackNumber, endIndex + 1);
        }
    }
    peek(stackNumber) {
        const endIndex = this.stackTracer.getStackEndIndex(stackNumber);
        return this.stackArray[endIndex];
    }
    isEmpty(stackNumber) {
        return this.stackArray.length === 0;
    }
}

module.exports = {
    chapterThreeProblemOneBruteForceSolution: threeStacksUsingArray,
};
