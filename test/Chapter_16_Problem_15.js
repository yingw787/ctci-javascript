const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_15 = require('../CTCI_5/Chapter_16_Moderate/Problem_15');

describe('chapterSixteenProblemFifteenBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const guessOne = 5.4;
        const solutionOne = {};
        expect(function() {
            Problem_15.chapterSixteenProblemFifteenBruteForceSolution(guessOne, solutionOne);
        }).to.throw(Error);

        const guessTwo = 'RhiG';
        const solutionTwo = 'mRYa';
        expect(function() {
            Problem_15.chapterSixteenProblemFifteenBruteForceSolution(guessTwo, solutionTwo);
        }).to.throw(Error);
    });
    it('return 1 hit and 1 psuedo-hit for guess "GGRR" and solution "RGBY"', function() {
        const guessOne = 'GGRR';
        const solutionOne = 'RGBY';
        assert.equal(JSON.stringify(Problem_15.chapterSixteenProblemFifteenBruteForceSolution(guessOne, solutionOne)), JSON.stringify([1, 1]));
    });
    it('return 4 hits and 0 psuedo-hits for guess "RGBY" and solution "RGBY"', function() {
        const guessOne = 'RGBY';
        const solutionOne = 'RGBY';
        assert.equal(JSON.stringify(Problem_15.chapterSixteenProblemFifteenBruteForceSolution(guessOne, solutionOne)), JSON.stringify([4, 0]));
    });
    it('return 0 hits and 0 psuedo-hits for guess "GGGG" and solution "BBBB"', function() {
        const guessOne = 'GGGG';
        const solutionOne = 'BBBB';
        assert.equal(JSON.stringify(Problem_15.chapterSixteenProblemFifteenBruteForceSolution(guessOne, solutionOne)), JSON.stringify([0, 0]));
    });
    it('return 0 hits and 4 psuedo-hits for guess "RGBY" and solution "GBYR"', function() {
        const guessOne = 'RGBY';
        const solutionOne = 'GBYR';
        assert.equal(JSON.stringify(Problem_15.chapterSixteenProblemFifteenBruteForceSolution(guessOne, solutionOne)), JSON.stringify([0, 4]));
    });
});
