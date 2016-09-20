/*
    Implement a function to check whether a linked list is a palindrome.
*/
'use strict';

const Stack = require('../Chapter_VII_Technical_Questions/Stack');
const assert = require('assert');

// O(N) time
// O(N) space
// CORRECT NO REDO
function chapterTwoProblemSixBruteForceSolution(singlyLinkedList) {
    assert(typeof singlyLinkedList === 'object');

    const stack = new Stack();

    let currentNode = singlyLinkedList.head;
    while (currentNode) {
        stack.push(currentNode.data);
        currentNode = currentNode.next;
    }

    currentNode = singlyLinkedList.head;
    while (currentNode) {
        const stackValue = stack.pop();
        if (JSON.stringify(stackValue) !== JSON.stringify(currentNode.data)) {
            return false;
        } else {
            currentNode = currentNode.next;
        }
    }

    return true;
}

module.exports = {
    chapterTwoProblemSixBruteForceSolution: chapterTwoProblemSixBruteForceSolution,
};
