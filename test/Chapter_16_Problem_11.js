const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_11 = require('../CTCI_5/Chapter_16_Moderate/Problem_11');

describe('chapterSixteenProblemElevenBookSolutionOne', function() {
    it('should throw an error upon incorrect inputs', function() {
        const shorterPlankLengthOne = 5.4;
        const longerPlankLengthOne = 'hi';
        const KOne = {'hi': '1'};
        expect(function() {
            Problem_11.chapterSixteenProblemElevenBookSolutionOne(shorterPlankLengthOne, longerPlankLengthOne, KOne);
        }).to.throw(Error);
    });
    it('should return shorterPlankLength and longerPlankLength for K = 1', function() {
        const shorterPlankLengthOne = 5;
        const longerPlankLengthOne = 8;
        const KOne = 1;
        assert.equal(JSON.stringify(Problem_11.chapterSixteenProblemElevenBookSolutionOne(shorterPlankLengthOne, longerPlankLengthOne, KOne)), JSON.stringify([5, 8]));
    });
    it('should return [10, 13, 16] for shorterPlankLength = 5, longerPlankLength = 8, and K = 2', function() {
        const shorterPlankLengthOne = 5;
        const longerPlankLengthOne = 8;
        const KOne = 2;
        assert.equal(JSON.stringify(Problem_11.chapterSixteenProblemElevenBookSolutionOne(shorterPlankLengthOne, longerPlankLengthOne, KOne)), JSON.stringify([10, 13, 16]));
    });
});
