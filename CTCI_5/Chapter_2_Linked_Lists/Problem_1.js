/*
    Write code to remove duplicates from an unsorted linked list.
    FOLLOW UP - How would you solve this problem if a temporary buffer is not allowed?
*/
'use strict';

module.exports = {
    // O(N) time
    // O(N) space
    chapterTwoProblemOneBruteForceSolution: singlyLinkedList => {
        const buffer = [];
        let currentNode = singlyLinkedList.head;

        if (currentNode) {
            buffer.push(currentNode.data);

            while (currentNode.next) {
                if (buffer.indexOf(currentNode.next.data) !== -1) {
                    if (currentNode.next.next) {
                        currentNode.next = currentNode.next.next;
                    } else {
                        currentNode.next = null;
                    }
                    singlyLinkedList.size -= 1;
                } else {
                    currentNode = currentNode.next;
                    buffer.push(currentNode.data);
                }
            }
        }
    },
    chapterTwoProblemOneImprovedSolution: singlyLinkedList => {
        let followerNode = singlyLinkedList.head;

        if (followerNode) {
            while (followerNode.next) {
                let leaderNode = followerNode;
                while (leaderNode.next) {
                    if (leaderNode.next.data === followerNode.data) {
                        if (leaderNode.next.next) {
                            leaderNode.next = leaderNode.next.next;
                        } else {
                            leaderNode.next = null;
                        }
                        singlyLinkedList.size -= 1;
                    } else {
                        leaderNode = leaderNode.next;
                    }
                }
                followerNode = followerNode.next;
            }
        }
    },
};
