'use strict';

const TrieNode = function(character) {
    this.data = character;
    this.children = [];
};

module.exports = TrieNode;
