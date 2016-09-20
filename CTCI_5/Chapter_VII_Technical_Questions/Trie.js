'use strict';

const TrieNode = function(character) {
    this.data = character;
    this.children = [];
};

function contains(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].data === value) {
            return true;
        }
    }
    return false;
}

function findIndex(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].data === value) {
            return array[i];
        }
    }
    return null;
}

class Trie {
    constructor(node) {
        this.root = new TrieNode('');
    }
    addWord(input) {
        let currentNode = this.root;
        let toBeAddedString = input;

        while (toBeAddedString.length > 0) {
            const children = currentNode.children;
            const currentCharacter = toBeAddedString.charAt(0);
            if (contains(children, currentCharacter)) {
                currentNode = findIndex(children, currentCharacter);
            } else {
                const newNode = new TrieNode(currentCharacter);
                currentNode.children.push(newNode);
                currentNode = newNode;
            }
            toBeAddedString = toBeAddedString.slice(1, toBeAddedString.length);
        }
    }
    removeWord(input) {
        let trieNodeArray = [];
        let toBeCheckedString = input;
        let currentNode = this.root;

        trieNodeArray.push(currentNode);

        while (toBeCheckedString.length > 0) {
            const children = currentNode.children;
            const currentCharacter = toBeCheckedString.charAt(0);
            if (contains(children, currentCharacter)) {
                currentNode = findIndex(children, currentCharacter);
                trieNodeArray.push(currentNode);
                toBeCheckedString = toBeCheckedString.slice(1, toBeCheckedString.length);
            }
        }

        let parentNode = trieNodeArray.pop();
        while (parentNode && parentNode !== this.root && parentNode.children.length <= 1) {
            currentNode = parentNode;
            parentNode = trieNodeArray.pop();
        }

        parentNode.children.splice(parentNode.children.indexOf(currentNode), 1);
    }
    isMember(input) {
        let currentNode = this.root;
        let toBeCheckedString = input;

        while (toBeCheckedString.length > 0) {
            const children = currentNode.children;
            const currentCharacter = toBeCheckedString.charAt(0);
            if (contains(children, currentCharacter)) {
                currentNode = findIndex(children, currentCharacter);
                toBeCheckedString = toBeCheckedString.slice(1, toBeCheckedString.length);
            } else {
                return false;
            }
        }
        return true;
    }
}

module.exports = Trie;
