'use strict';

const chai = require('chai');
const assert = chai.assert;

const BinarySearchTree = require('../CTCI_5/Chapter_VII_Technical_Questions/BinarySearchTree');

describe('BinarySearchTree', function() {
    it('should be able to initialize with null value', function() {
        let tree = new BinarySearchTree();
        assert.equal(tree.getRoot(), null);
    });
    it('should be able to insert values and lookup values', function() {
        let tree = new BinarySearchTree();
        tree.insert(10, 'Hi');
        const data = tree.lookup(10);
        assert.equal(data, 'Hi');
    });
    it('should be able to insert multiple values and still get a given value', function() {
        let tree = new BinarySearchTree();
        tree.insert(10, '10');
        tree.insert(5, '5');
        tree.insert(15, '15');
        tree.insert(12, '12');
        const data = tree.lookup(12);
        assert.equal(data, '12');
    });
    it('should return -1 upon looking up items that dont exist.', function() {
        let tree = new BinarySearchTree();
        tree.insert(10, '10');
        tree.insert(18, '18');
        const data = tree.lookup(15);
        assert.equal(data, -1);
    });
});
