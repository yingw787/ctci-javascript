'use strict';

const SinglyLinkedList = require('./SinglyLinkedList');

const generateHashCodeFromString = string => {
    let hash = 0;
    let charCode;

    for (let i = 0; i < string.length; i++) {
        charCode = string.charCodeAt(i);
        // don't get this line below
        hash = ((hash << 5) - hash) + charCode;
        hash |= 0;
    }

    hash = Math.abs(hash);
    return hash;
};

const HashTable = function(hashTableSize) {
    this.size = hashTableSize || 10;
    this.hashTable = {};

    for (let i = 0; i < this.size; i++) {
        this.hashTable[i] = new SinglyLinkedList();
    }
};

HashTable.prototype.insert = function(object) {
    // every object has a key and a value. Error testing beyond what I want to test here.
    const hashCode = generateHashCodeFromString(JSON.stringify(object.key));
    const index = hashCode % this.size;

    this.hashTable[index].append(object);
};

HashTable.prototype.get = function(key) {
    const hashCode = generateHashCodeFromString(JSON.stringify(key));
    const index = hashCode % this.size;

    let list = [];
    for (let i = 0; i < this.hashTable[index].size; i++) {
        list.push(this.hashTable[index].get(i));
    }

    for (let j = 0; j < list.length; j++) {
        if (list[j].data.key === key) {
            return list[j].data;
        }
    }

    return null;
};

HashTable.prototype.contains = function(key) {
    const hashCode = generateHashCodeFromString(JSON.stringify(key));
    const index = hashCode % this.size;

    let list = [];
    for (let i = 0; i < this.hashTable[index].size; i++) {
        list.push(this.hashTable[index].get(i));
    }

    for (let j = 0; j < list.length; j++) {
        if (list[j].data.key === key) {
            return true;
        }
    }

    return false;
};

HashTable.prototype.remove = function(key) {
    const hashCode = generateHashCodeFromString(JSON.stringify(key));
    const index = hashCode % this.size;

    let list = [];
    for (let i = 0; i < this.hashTable[index].size; i++) {
        list.push(this.hashTable[index].get(i));
    }

    for (let j = 0; j < list.length; j++) {
        if (list[j].data.key === key) {
            this.hashTable[index].remove(j);
        }
    }
};

module.exports = HashTable;
