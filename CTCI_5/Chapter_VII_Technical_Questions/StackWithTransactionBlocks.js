// from http://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript
'use strict';

const StackNode = function(stackData) {
    this.data = stackData;
    this.previous = null;
};

class StackWithTransactionBlocks {
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
    peek() {
        return this.top;
    }
    begin() {
        // TODO: begin transaction block. Transaction blocks can be nested within each other.
    }
    rollback() {
        // TODO: roll back all transactions within transaction block.
    }
    commit() {
        // TODO: commit all transactions within transaction block.
    }
}

module.exports = StackWithTransactionBlocks;
