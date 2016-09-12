'use strict';

const Tree = function(node) {
    this.root = node;
};

Tree.prototype.getRoot = function() {
    return this.root;
};

module.exports = Tree;
