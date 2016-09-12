// from http://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript
'use strict';

const Queue = function() {
    this.head = null;
    this.size = 0;
};

const Node = function(queueData) {
    this.data = queueData;
    this.next = null;
};

Queue.prototype.enqueue = function(queueData) {
    const node = new Node(queueData);

    if (!this.head) {
        this.head = node;
    } else {
        let n = this.head;
        while (n.next) {
            n = n.next;
        }
        n.next = node;
    }

    this.size += 1;
    return node;
};

Queue.prototype.dequeue = function() {
    const dequeuedNode = this.head;
    this.head = this.head.next;
    this.size -= 1;
    return dequeuedNode;
};

module.exports = Queue;
