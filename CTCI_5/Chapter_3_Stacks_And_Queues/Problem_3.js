/*
    Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).

    FOLLOW UP

    Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.
*/
'use strict';

const Stack = require('../Chapter_VII_Technical_Questions/Stack');
const MAX_SUBSTACK_CAPACITY = 3;

// CORRECT NO REDO
class SubStack {
    constructor() {
        this.Stack = new Stack();
        this.numberOfElements = 0;
    }
    push(item) {
        this.numberOfElements += 1;
        this.Stack.push(item);
    }
    pop() {
        this.numberOfElements -= 1;
        return this.Stack.pop();
    }
    peek() {
        return this.Stack.peek();
    }
}

class setOfStacks {
    constructor() {
        this.arrayOfStacks = [];
    }
    push(item) {
        if (this.arrayOfStacks.length === 0) {
            const subStack = new SubStack();
            subStack.push(item);
            this.arrayOfStacks.push(subStack);
        } else if (this.arrayOfStacks[this.arrayOfStacks.length - 1].numberOfElements === MAX_SUBSTACK_CAPACITY) {
            const subStack = new SubStack();
            subStack.push(item);
            this.arrayOfStacks.push(subStack);
        } else {
            this.arrayOfStacks[this.arrayOfStacks.length - 1].push(item);
        }
    }
    pop() {
        if (this.arrayOfStacks.length === 0) {
            return null;
        } else {
            const item = this.arrayOfStacks[this.arrayOfStacks.length - 1].pop();
            if (this.arrayOfStacks[this.arrayOfStacks.length - 1].numberOfElements === 0) {
                this.arrayOfStacks.pop();
            }
            return item;
        }
    }
    popAt(index) {
        const item = this.arrayOfStacks[index].pop();
        if (this.arrayOfStacks[index].numberOfElements === 0) {
            this.arrayOfStacks.splice(index, 1);
        }
        return item;
    }
    peek() {
        if (this.arrayOfStacks.length === 0) {
            return null;
        } else {
            return this.arrayOfStacks[this.arrayOfStacks.length - 1].peek();
        }
    }
    isEmpty() {
        return this.arrayOfStacks.length === 0;
    }
}

module.exports = {
    chapterThreeProblemThreeBruteForceSolution: setOfStacks,
};
