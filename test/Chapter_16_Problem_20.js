const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_20 = require('../CTCI_5/Chapter_16_Moderate/Problem_20');

describe('chapterSixteenProblemTwentyBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const digitsOne = 'hi';
        const dictionaryOne = 5;
        expect(function() {
            Problem_20.chapterSixteenProblemTwentyBruteForceSolution(digitsOne, dictionaryOne);
        }).to.throw(Error);
    });
    it('should return [tree, used] for digits 8733 and the dictionary including tree and used', function() {
        const digitsOne = 8733;
        const dictionaryOne = ['tree', 'gate', 'used'];
        assert.equal(JSON.stringify(Problem_20.chapterSixteenProblemTwentyBruteForceSolution(digitsOne, dictionaryOne)), JSON.stringify(['tree', 'used']));
    });
});
