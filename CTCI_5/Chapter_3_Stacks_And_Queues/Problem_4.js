/*
    Implement a MyQueue class which implements a queue using two stacks.
*/
'use strict';

const Stack = require('../Chapter_VII_Technical_Questions/Stack');

class QueueUsingStacks {
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }
    add(item) {
        this.stackOne.push(item);
    }
    remove() {
        while (!this.stackOne.isEmpty()) {
            this.stackTwo.push(this.stackOne.pop());
        }
        const item = this.stackTwo.pop();
        while (!this.stackTwo.isEmpty()) {
            this.stackOne.push(this.stackTwo.pop());
        }
        return item;
    }
    peek() {
        while (!this.stackOne.isEmpty()) {
            this.stackTwo.push(this.stackOne.pop());
        }

        const item = this.stackTwo.peek();
        while (!this.stackTwo.isEmpty()) {
            this.stackOne.push(this.stackTwo.pop());
        }
        return item.data;
    }
    isEmpty() {
        return this.stackOne.isEmpty();
    }
}

module.exports = {
    chapterThreeProblemFourBruteForceSolution: QueueUsingStacks,
};
