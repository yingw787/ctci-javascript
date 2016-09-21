/*
    Implement an algorithm to find the kth to last element of a singly linked list.
*/
'use strict';

const assert = require('assert');

// O(N) time
// O(1) space
// CORRECT NO REDO
function chapterTwoProblemTwoBruteForceSolution(singlyLinkedList, k) {
    assert(typeof singlyLinkedList === 'object');
    assert(typeof k === 'number');

    if (singlyLinkedList.size < k) {
        return null;
    } else {
        let leaderPointer = singlyLinkedList.head;
        let followerPointer = singlyLinkedList.head;

        for (let i = 0; i < k - 1; i++) {
            leaderPointer = leaderPointer.next;
        }
        while (leaderPointer.next) {
            leaderPointer = leaderPointer.next;
            followerPointer = followerPointer.next;
        }

        return followerPointer;
    }
}

module.exports = {
    chapterTwoProblemTwoBruteForceSolution: chapterTwoProblemTwoBruteForceSolution,
};
