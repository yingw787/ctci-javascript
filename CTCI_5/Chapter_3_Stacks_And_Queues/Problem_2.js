/*
    How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop, and min should all operate in O(1) time.
*/
'use strict';

function _setMin(previousMin, stackData) {
    if (previousMin === null) {
        return stackData;
    }
    return previousMin < stackData ? previousMin : stackData;
}

const StackNode = function(previousMin, stackData) {
    this.data = stackData;
    this.previous = null;
    this.min = _setMin(previousMin, stackData);
};

// CORRECT NO REDO
class stackWithMin {
    constructor() {
        this.top = null;
        this.size = 0;
        this.stackMin = null;
    }
    push(item) {
        if (this.stackMin > item || this.stackMin === null) {
            this.stackMin = item;
        }
        let node = new StackNode(this.stackMin, item);
        node.previous = this.top;
        this.top = node;
        this.size += 1;
        return this.top;
    }
    pop() {
        const topBeforeChange = this.top;
        this.top = this.top.previous;
        this.size -= 1;
        return topBeforeChange.data;
    }
    min() {
        return this.top.min;
    }
    peek() {
        return this.top.data;
    }
    isEmpty() {
        return this.top === null;
    }
}

module.exports = {
    chapterThreeProblemTwoBruteForceSolution: stackWithMin,
};
