'use strict';

const TreeNode = function(nodeData) {
    this.data = nodeData;
    this.children = [];
};

TreeNode.prototype.addChild = function(node) {
    this.children.push(node);
};

TreeNode.prototype.getChildren = function() {
    return this.children;
};

module.exports = TreeNode;
