/*
    Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
*/
'use strict';

const assert = require('assert');

// O(N) space
// O(N) time
// REDO (O(LOOP_SIZE - K) space, O(1) time)
// TODO: WRITE TESTS
function chapterTwoProblemEightBruteForceSolution(circularLinkedList) {
    assert(typeof circularLinkedList === 'object');

    const buffer = [];
    let currentNode = circularLinkedList.head;
    while (currentNode) {
        if (buffer.indexOf(currentNode) !== -1) {
            return currentNode;
        } else {
            currentNode = currentNode.next;
        }
    }
    return null;
}

module.exports = {
    chapterTwoProblemEightBruteForceSolution: chapterTwoProblemEightBruteForceSolution,
};
