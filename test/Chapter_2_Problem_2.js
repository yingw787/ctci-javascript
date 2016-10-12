const chai = require('chai');
const assert = chai.assert;

const SinglyLinkedList = require('../CTCI_5/Chapter_VII_Technical_Questions/SinglyLinkedList');
const Problem_2 = require('../CTCI_5/Chapter_2_Linked_Lists/Problem_2');

describe('chapterTwoProblemTwoBruteForceSolution', function() {
    it('should give correct value here', function() {
        const singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.append(3);
        singlyLinkedList.append(1);
        singlyLinkedList.append(2);
        singlyLinkedList.append(5);

        const node = Problem_2.chapterTwoProblemTwoBruteForceSolution(singlyLinkedList, 2);

        assert.equal(node.data, 2);

        const nodeTwo = Problem_2.chapterTwoProblemTwoBruteForceSolution(singlyLinkedList, 3);

        assert.equal(nodeTwo.data, 1);
    });
});
