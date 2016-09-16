/*
    You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

    EXAMPLE:

    Input:
    7 -> 1 -> 6 + 5 -> 9 -> 2 (617 + 295);
    Output: 2 -> 1 -> 9 (912).

    FOLLOW UP:

    Supposed the digits are stored in forward order. Repeat the above problem.
*/
'use strict';

const SinglyLinkedList = require('../Chapter_VII_Technical_Questions/SinglyLinkedList');

const _reverse = singlyLinkedList => {
    const head = singlyLinkedList.head;
    if (!head || !head.next) { return; }

    const secondNode = head.next;
    const thirdNode = secondNode.next;

    secondNode.next = head;
    head.next = null;

    if (!thirdNode) { return; }

    let currentNode = thirdNode;
    let previousNode = secondNode;

    while (currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = previousNode;

        previousNode = currentNode;
        currentNode = nextNode;
    }

    singlyLinkedList.head = previousNode;
};

const sumLists = (numberListOne, numberListTwo) => {
    const result = new SinglyLinkedList();

    let numberListOneCurrentNode = numberListOne.head;

    while (numberListOneCurrentNode) {
        result.append(numberListOneCurrentNode.data);
        numberListOneCurrentNode = numberListOneCurrentNode.next;
    }

    let carry = 0;
    let numberListTwoCurrentNode = numberListTwo.head;
    let resultCurrentNode = result.head;

    while (numberListTwoCurrentNode) {
        if (resultCurrentNode) {
            const value = resultCurrentNode.data + numberListTwoCurrentNode.data + carry;
            carry = value >= 10 ? 1 : 0;
            if (carry) {
                resultCurrentNode.data = value % 10;
            } else {
                resultCurrentNode.data = value;
            }
            resultCurrentNode = resultCurrentNode.next;
            numberListTwoCurrentNode = numberListTwoCurrentNode.next;
        } else {
            const value = numberListTwoCurrentNode.data + carry;
            carry = value >= 10 ? 1 : 0;
            if (carry) {
                result.append(value % 10);
            } else {
                result.append(value);
            }
            numberListTwoCurrentNode = numberListTwoCurrentNode.next;
        }
    }
    return result;
};

module.exports = {
    // O(N) time
    // O(N) space
    chapterTwoProblemFiveBruteForceSolution: sumLists,
    // O(N) time
    // O(N) space
    chapterTwoProblemFiveBruteForceSolutionFollowUp: (numberListOne, numberListTwo) => {
        _reverse(numberListOne);
        _reverse(numberListTwo);
        let result = sumLists(numberListOne, numberListTwo);
        _reverse(result);
        return result;
    },
};
