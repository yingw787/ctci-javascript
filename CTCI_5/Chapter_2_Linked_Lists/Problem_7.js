/*
    Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.
*/
'use strict';

const assert = require('assert');

// O(Math.max(N, M)) time, M, N being lengths of the linked lists
// O(1) space
// TODO: REVIEW PROBLEM AND INTERSECTING LINKED LISTS
// TODO: WRITE TESTS
function chapterTwoProblemSevenBookSolution(linkedListOne, linkedListTwo) {
    assert(typeof linkedListOne === 'object');
    assert(typeof linkedListTwo === 'object');

    let linkedListOneTail = linkedListOne.head;
    while (linkedListOneTail.next) {
        linkedListOneTail = linkedListOneTail.next;
    }

    let linkedListTwoTail = linkedListTwo.head;
    while (linkedListTwoTail.next) {
        linkedListTwoTail = linkedListTwoTail.next;
    }

    if (linkedListOneTail === linkedListTwoTail) {
        let longerLinkedList = linkedListOne.size > linkedListTwo.size ? linkedListOne : linkedListTwo;
        let shorterLinkedList = longerLinkedList === linkedListOne ? linkedListTwo : linkedListOne;

        const sizeDifference = longerLinkedList.size - shorterLinkedList.size;

        let longerLinkedListCurrentNode = longerLinkedList.head;
        let shorterLinkedListCurrentNode = shorterLinkedList.head;

        for (let i = 0; i < sizeDifference; i++) {
            longerLinkedListCurrentNode = longerLinkedListCurrentNode.next;
        }
        for (let i = 0; i < shorterLinkedList.size; i++) {
            if (longerLinkedListCurrentNode === shorterLinkedListCurrentNode) {
                return shorterLinkedListCurrentNode;
            } else {
                longerLinkedListCurrentNode = longerLinkedListCurrentNode.next;
                shorterLinkedListCurrentNode = shorterLinkedListCurrentNode.next;
            }
        }
        throw new Error('uncaught error; should have returned intersecting node.');
    } else {
        return null;
    }
}

module.exports = {
    chapterTwoProblemSevenBookSolution: chapterTwoProblemSevenBookSolution,
};
