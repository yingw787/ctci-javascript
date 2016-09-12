const chai = require('chai');
const assert = chai.assert;

const Tree = require('../CTCI_5/Chapter_VII_Technical_Questions/Tree');
const Node = require('../CTCI_5/Chapter_VII_Technical_Questions/TreeNode');

describe('Tree', function() {
    it('should be able to initialize with a root node', function() {
        const rootNode = new Node('root');
        const tree = new Tree(rootNode);
        const node = tree.getRoot();
        assert.equal(node.data, 'root');
    });
    it('should be able to add children', function() {
        const rootNode = new Node('root');
        const tree = new Tree(rootNode);
        const childNode = new Node('child of root');
        tree.getRoot().addChild(childNode);
        const childNodeArray = tree.getRoot().getChildren();
        assert.equal(childNodeArray[0].data, 'child of root');
    });
});
