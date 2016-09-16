'use strict';

const chai = require('chai');
const assert = chai.assert;

const HashTable = require('../CTCI_5/Chapter_VII_Technical_Questions/HashTable');

describe('HashTable', function() {
    it('should be able to initialize either with a value or without a value', function() {
        const hashTable = new HashTable();
        assert.equal(hashTable.size, 10);
        const anotherHashTable = new HashTable(11);
        assert.equal(anotherHashTable.size, 11);
    });
    it('should be able to add values', function() {
        const hashTable = new HashTable();
        hashTable.insert({key: 'N9E 4X6', value: '1489 Auburn Lane'});
        assert.equal(hashTable.contains('N9E 4X6'), true);
    });
    it('should be able to retrieve values', function() {
        const hashTable = new HashTable();
        hashTable.insert({key: 'N9E 4X6', value: '1489 Auburn Lane'});
        const object = hashTable.getIfExists('N9E 4X6');
        assert.equal(JSON.stringify(object), JSON.stringify({key: 'N9E 4X6', value: '1489 Auburn Lane'}));
    });
    it('should be able to remove values', function() {
        const hashTable = new HashTable();
        hashTable.insert({key: 'N9E 4X6', value: '1489 Auburn Lane'});
        const object = hashTable.getIfExists('N9E 4X6');
        assert.equal(JSON.stringify(object), JSON.stringify({key: 'N9E 4X6', value: '1489 Auburn Lane'}));
        hashTable.remove('N9E 4X6');
        assert.equal(hashTable.contains('N9E 4X6'), false);
    });
});
