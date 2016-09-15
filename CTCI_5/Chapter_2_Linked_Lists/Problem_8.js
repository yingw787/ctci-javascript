/*
    Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
*/
'use strict';

module.exports = {
    // O(N) space
    // O(N) time
    chapterTwoProblemEightBruteForceSolution: circularLinkedList => {
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
    },
};
