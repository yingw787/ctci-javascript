'use strict';

const chai = require('chai');
const assert = chai.assert;

const BinaryTree = require('../CTCI_5/Chapter_VII_Technical_Questions/BinaryTree');

describe('BinaryTree', function() {
    it('should be able to initialize with null value', function() {
        let tree = new BinaryTree();
        assert.equal(tree.root, null);
    });
    it('should return 6 5 4 upon traversal after insertion of 5 6 4.', function() {
        let tree = new BinaryTree();
        tree.insert(5, '5');
        tree.insert(6, '6');
        tree.insert(4, '4');
        const values = tree.inOrderTraversal();
        assert.equal(JSON.stringify(values), JSON.stringify([6, 5, 4]));
    });
});
