/*
    Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.
*/
'use strict';

module.exports = {
    chapterTwoProblemThreeBruteForceSolution: singlyLinkedListNode => {
        while (singlyLinkedListNode.next.next) {
            singlyLinkedListNode.data = singlyLinkedListNode.next.data;
            singlyLinkedListNode = singlyLinkedListNode.next;
        }
        singlyLinkedListNode.data = singlyLinkedListNode.next.data;
        singlyLinkedListNode.next = null;
    },
};
