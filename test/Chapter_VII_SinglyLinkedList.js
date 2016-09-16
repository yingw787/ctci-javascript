const chai = require('chai');
const assert = chai.assert;

const SinglyLinkedList = require('../CTCI_5/Chapter_VII_Technical_Questions/SinglyLinkedList');

describe('SinglyLinkedList', function() {
    it('should be able to add basic values', function() {
        const singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.append('hi');
        const headNode = singlyLinkedList.get(0);
        assert.equal(headNode.data, 'hi');
    });
    it('should be able to remove values', function() {
        const singlyLinkedList = new SinglyLinkedList();
        singlyLinkedList.append('hi');
        singlyLinkedList.append('one');
        singlyLinkedList.remove(0);
        const headNode = singlyLinkedList.get(0);
        assert.equal(headNode.data, 'one');
    });
});
