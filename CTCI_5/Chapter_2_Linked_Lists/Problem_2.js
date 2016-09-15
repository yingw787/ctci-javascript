/*
    Implement an algorithm to find the kth to last element of a singly linked list.
*/
'use strict';

module.exports = {
    // O(N) time
    // O(1) space
    chapterTwoProblemTwoBruteForceSolution: (singlyLinkedList, k) => {
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
    },
};
