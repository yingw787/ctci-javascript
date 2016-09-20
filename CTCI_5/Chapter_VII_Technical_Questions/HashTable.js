'use strict';

const SinglyLinkedList = require('./SinglyLinkedList');

const generateHashCodeFromString = input => {
    let hash = 0;
    let charCode;

    for (let i = 0; i < input.length; i++) {
        charCode = input.charCodeAt(i);
        // don't get this line below
        hash = ((hash << 5) - hash) + charCode;
        hash |= 0;
    }

    hash = Math.abs(hash);
    return hash;
};

class HashTable {
    constructor(hashTableSize) {
        this.size = hashTableSize || 10;
        this.hashTable = {};

        for (let i = 0; i < this.size; i++) {
            this.hashTable[i] = new SinglyLinkedList();
        }
    }
    insert(object) {
        const index = this._getIndex(object.key);
        this.hashTable[index].append(object);
    }
    getIfExists(key) {
        const index = this._getIndex(key);

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
    }
    contains(key) {
        const index = this._getIndex(key);

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
    }
    remove(key) {
        const index = this._getIndex(key);

        let list = [];
        for (let i = 0; i < this.hashTable[index].size; i++) {
            list.push(this.hashTable[index].get(i));
        }

        for (let j = 0; j < list.length; j++) {
            if (list[j].data.key === key) {
                this.hashTable[index].remove(j);
            }
        }
    }
    _getIndex(key) {
        return generateHashCodeFromString(JSON.stringify(key)) % this.size;
    }
}

module.exports = HashTable;
