/*
    Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x.

    EXAMPLE
    Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 (partition = 5)
    Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
*/
'use strict';

const SinglyLinkedList = require('../Chapter_VII_Technical_Questions/SinglyLinkedList');
const assert = require('assert');

// O(N * N * log(N)) time
// O(N) space
function chapterTwoProblemFourBruteForceSolution(singlyLinkedList, partition) {
    assert(typeof singlyLinkedList === 'object');
    assert(typeof partition === 'number');

    const list = [];
    for (let i = 0; i < singlyLinkedList.size; i++) {
        list.push(singlyLinkedList.get(i).data);
    }
    const sortedList = list.sort(function(a, b) {
        return a - b;
    });
    for (let i = 0; i < singlyLinkedList.size; i++) {
        singlyLinkedList.get(i).data = sortedList[i];
    }
}

// O(N * N) time
// O(N) space
function chapterTwoProblemFourBookSolutionOne(singlyLinkedList, partition) {
    assert(typeof singlyLinkedList === 'object');
    assert(typeof partition === 'number');

    const smallList = new SinglyLinkedList();
    const bigList = new SinglyLinkedList();
    for (let i = 0; i < singlyLinkedList.size; i++) {
        const value = singlyLinkedList.get(i).data;
        if (value >= partition) {
            bigList.append(value);
        } else {
            smallList.append(value);
        }
    }
    for (let i = 0; i < bigList.size; i++) {
        smallList.append(bigList.get(i).data);
    }
    return smallList;
}

// O(N) time
// O(1) space
// TODO: review this again
function chapterTwoProblemFourBookSolutionTwo(singlyLinkedList, partition) {
    assert(typeof singlyLinkedList === 'object');
    assert(typeof partition === 'number');

    if (singlyLinkedList.size <= 1) {
        return;
    } else {
        let currentNode = singlyLinkedList.head;
        while (currentNode.next) {
            if (currentNode.next.data < partition) {
                const transferredNode = currentNode.next;
                if (currentNode.next.next) {
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode.next = null;
                }
                transferredNode.next = singlyLinkedList.head;
                singlyLinkedList.head = transferredNode;
            } else {
                currentNode = currentNode.next;
            }
        }
    }
}

module.exports = {
    chapterTwoProblemFourBruteForceSolution: chapterTwoProblemFourBruteForceSolution,
    chapterTwoProblemFourBookSolutionOne: chapterTwoProblemFourBookSolutionOne,
    chapterTwoProblemFourBookSolutionTwo: chapterTwoProblemFourBookSolutionTwo,
};
