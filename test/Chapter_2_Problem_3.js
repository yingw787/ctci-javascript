const chai = require('chai');
const assert = chai.assert;

const SinglyLinkedList = require('../CTCI_5/Chapter_VII_Technical_Questions/SinglyLinkedList');
const Problem_3 = require('../CTCI_5/Chapter_2_Linked_Lists/Problem_3');

describe('chapterTwoProblemThreeBruteForceSolution', function() {
    it('should give correct value here', function() {
        const singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.append('a');
        singlyLinkedList.append('b');
        singlyLinkedList.append('c');
        singlyLinkedList.append('d');
        singlyLinkedList.append('e');

        let node = singlyLinkedList.head.next.next;

        Problem_3.chapterTwoProblemThreeBruteForceSolution(node);
        // TODO: size needs to be incremented manually; need to make it do so automatically
        singlyLinkedList.size -= 1;

        const newSinglyLinkedList = new SinglyLinkedList();
        newSinglyLinkedList.append('a');
        newSinglyLinkedList.append('b');
        newSinglyLinkedList.append('d');
        newSinglyLinkedList.append('e');

        assert.equal(JSON.stringify(singlyLinkedList), JSON.stringify(newSinglyLinkedList));
    });
});
