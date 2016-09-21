/*
    Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.
*/
'use strict';

const assert = require('assert');

// O(N) time, N = number of remaining elements
// O(1) space
// CORRECT NO REDO
function chapterTwoProblemThreeBruteForceSolution(singlyLinkedListNode) {
    assert(typeof singlyLinkedListNode === 'object');

    while (singlyLinkedListNode.next.next) {
        singlyLinkedListNode.data = singlyLinkedListNode.next.data;
        singlyLinkedListNode = singlyLinkedListNode.next;
    }
    singlyLinkedListNode.data = singlyLinkedListNode.next.data;
    singlyLinkedListNode.next = null;
}

module.exports = {
    chapterTwoProblemThreeBruteForceSolution: chapterTwoProblemThreeBruteForceSolution,
};
