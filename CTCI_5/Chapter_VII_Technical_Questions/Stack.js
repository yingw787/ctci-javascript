// from http://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript
'use strict';

const StackNode = function(stackData) {
    this.data = stackData;
    this.previous = null;
};

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(stackData) {
        let node = new StackNode(stackData);

        node.previous = this.top;
        this.top = node;
        this.size += 1;
        return this.top;
    }
    pop() {
        const topBeforeChange = this.top;
        this.top = this.top.previous;
        this.size -= 1;
        return topBeforeChange;
    }
}

module.exports = Stack;
