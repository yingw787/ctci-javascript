// from http://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript
'use strict';

const Stack = function() {
    this.top = null;
    this.size = 0;
};

const Node = function(stackData) {
    this.data = stackData;
    this.previous = null;
};

Stack.prototype.push = function(stackData) {
    let node = new Node(stackData);

    node.previous = this.top;
    this.top = node;
    this.size += 1;
    return this.top;
};

Stack.prototype.pop = function() {
    const temp = this.top;
    this.top = this.top.previous;
    this.size -= 1;
    return temp;
};

module.exports = Stack;
