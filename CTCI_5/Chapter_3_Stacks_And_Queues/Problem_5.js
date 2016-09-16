/*
    Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
*/
'use strict';

const Stack = require('../Chapter_VII_Technical_Questions/Stack');

class sortableStack {
    constructor() {
        this.top = null;
        this.stack = new Stack();
    }
    push(item) {
        this.stack.push(item);
        this.top = this.stack.top;
        return this.top;
    }
    pop() {
        const value = this.stack.pop();
        return value;
    }
    sort() {
        const bufferStack = new Stack();
        while (!this.stack.isEmpty()) {
            const value = this.stack.pop();
            if (bufferStack.isEmpty() || value >= bufferStack.top.data) {
                bufferStack.push(value);
            } else {
                while (!bufferStack.isEmpty() && value < bufferStack.top.data) {
                    const bufferValue = bufferStack.pop();
                    this.stack.push(bufferValue);
                }
                bufferStack.push(value);
            }
        }

        while (!bufferStack.isEmpty()) {
            this.stack.push(bufferStack.pop());
        }
    }
    peek() {
        return this.top;
    }
    isEmpty() {
        return this.top === null;
    }
}

module.exports = {
    chapterThreeProblemFiveBookSolution: sortableStack,
};
