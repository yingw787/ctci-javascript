// from http://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript
'use strict';

const QueueNode = function(queueData) {
    this.data = queueData;
    this.next = null;
};

class Queue {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    enqueue(queueData) {
        const node = new QueueNode(queueData);

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
    }
    dequeue() {
        const dequeuedNode = this.head;
        this.head = this.head.next;
        this.size -= 1;
        return dequeuedNode;
    }
    isEmpty() {
        return this.head === null;
    }
}

module.exports = Queue;
