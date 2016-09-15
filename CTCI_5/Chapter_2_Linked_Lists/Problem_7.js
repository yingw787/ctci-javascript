/*
    Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.
*/
'use strict';

// I did not know that === compared by reference; I thought it only compared by value
// TODO: Review this problem and questions around intersecting linked lists more!

module.exports = {
    chapterTwoProblemSevenLookedUpSolution: (linkedListOne, linkedListTwo) => {
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
    },
};
