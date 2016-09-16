'use strict';

const chai = require('chai');
const assert = chai.assert;

const Trie = require('../CTCI_5/Chapter_VII_Technical_Questions/Trie');

describe('Trie', function() {
    it('should be able to initialize with empty root', function() {
        const trie = new Trie();
        assert.equal(trie.isMember(''), true);
    });
    it('should be able to add one word.', function() {
        const trie = new Trie();
        trie.addWord('root');
        assert.equal(trie.isMember('root'), true);
    });
    it('should be able to add multiple words.', function() {
        const trie = new Trie();
        trie.addWord('ann');
        trie.addWord('amy');
        assert.equal(trie.isMember('ann'), true);
        assert.equal(trie.isMember('amy'), true);
        assert.equal(trie.isMember('aann'), false);
    });
    it('should be able to remove a word.', function() {
        const trie = new Trie();
        trie.addWord('root');
        assert.equal(trie.isMember('root'), true);
        trie.removeWord('root');
        assert.equal(trie.isMember('root'), false);
    });
    it('should be able to remove a word while leaving other words intact', function() {
        const trie = new Trie();
        trie.addWord('ann');
        trie.addWord('amy');
        assert.equal(trie.isMember('ann'), true);
        assert.equal(trie.isMember('amy'), true);
        trie.removeWord('amy');
        assert.equal(trie.isMember('ann'), true);
        assert.equal(trie.isMember('amy'), false);
    });
});
