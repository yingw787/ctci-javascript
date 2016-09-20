/*
    Implement a MyQueue class which implements a queue using two stacks.
*/
'use strict';

const Stack = require('../Chapter_VII_Technical_Questions/Stack');

// CORRECT NO REDO
class QueueUsingStacks {
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }
    add(item) {
        this.stackOne.push(item);
    }
    _shiftStack(operation) {
        let item;
        while (!this.stackOne.isEmpty()) {
            this.stackTwo.push(this.stackOne.pop());
        }

        if (operation === 'pop') {
            item = this.stackTwo.pop();
        } else if (operation === 'peek') {
            item = this.stackTwo.peek().data;
        }
        else {
            throw new Error('invalid operation.');
        }
        while (!this.stackTwo.isEmpty()) {
            this.stackOne.push(this.stackTwo.pop());
        }
        return item;
    }
    remove() {
        return this._shiftStack('pop');
    }
    peek() {
        return this._shiftStack('peek');
    }
    isEmpty() {
        return this.stackOne.isEmpty();
    }
}

module.exports = {
    chapterThreeProblemFourBruteForceSolution: QueueUsingStacks,
};
