/*
    Implement a function to check whether a linked list is a palindrome.
*/
'use strict';

const Stack = require('../Chapter_VII_Technical_Questions/Stack');

module.exports = {
    // O(N) time
    // O(N) space
    chapterTwoProblemSixBruteForceSolution: singlyLinkedList => {
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
    },
};
