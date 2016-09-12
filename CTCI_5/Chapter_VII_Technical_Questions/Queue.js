// from http://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript
'use strict';

const Queue = function() {
    this.first = null;
    this.size = 0;
};

const Node = function(queueData) {
    this.data = queueData;
    this.next = null;
};

Queue.prototype.enqueue = function(queueData) {
    let node = new Node(queueData);

    if (!this.first) {
        this.first = node;
    } else {
        let n = this.first;
        while (n.next) {
            n = n.next;
        }
        n.next = node;
    }

    this.size += 1;
    return node;
};

Queue.prototype.dequeue = function() {
    const temp = this.first;
    this.first = this.first.next;
    this.size -= 1;
    return temp;
};

module.exports = Queue;
