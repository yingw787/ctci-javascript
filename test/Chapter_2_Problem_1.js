const chai = require('chai');
const assert = chai.assert;

const SinglyLinkedList = require('../CTCI_5/Chapter_VII_Technical_Questions/singlyLinkedList');
const Problem_1 = require('../CTCI_5/Chapter_2_Linked_Lists/Problem_1');

describe('chapterTwoProblemOneBruteForceSolution', function() {
    it('should give correct value here', function() {
        const singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.append(3);
        singlyLinkedList.append(1);
        singlyLinkedList.append(2);
        singlyLinkedList.append(9);
        singlyLinkedList.append(5);
        singlyLinkedList.append(9);

        Problem_1.chapterTwoProblemOneBruteForceSolution(singlyLinkedList);

        const newSinglyLinkedList = new SinglyLinkedList();
        newSinglyLinkedList.append(3);
        newSinglyLinkedList.append(1);
        newSinglyLinkedList.append(2);
        newSinglyLinkedList.append(9);
        newSinglyLinkedList.append(5);

        assert.equal(JSON.stringify(singlyLinkedList), JSON.stringify(newSinglyLinkedList));
    });
});

describe('chapterTwoProblemOneImprovedSolution', function() {
    it('should give correct value here', function() {
        const singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.append(3);
        singlyLinkedList.append(1);
        singlyLinkedList.append(2);
        singlyLinkedList.append(9);
        singlyLinkedList.append(5);
        singlyLinkedList.append(9);

        Problem_1.chapterTwoProblemOneBruteForceSolution(singlyLinkedList);

        const newSinglyLinkedList = new SinglyLinkedList();
        newSinglyLinkedList.append(3);
        newSinglyLinkedList.append(1);
        newSinglyLinkedList.append(2);
        newSinglyLinkedList.append(9);
        newSinglyLinkedList.append(5);

        assert.equal(JSON.stringify(singlyLinkedList), JSON.stringify(newSinglyLinkedList));
    });
});
