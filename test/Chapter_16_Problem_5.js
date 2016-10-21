const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_5 = require('../CTCI_5/Chapter_16_Moderate/Problem_5');

describe('chapterSixteenProblemFiveBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const numberOne = 'hi';
        expect(function() {
            Problem_5.chapterSixteenProblemFiveBruteForceSolution(numberOne);
        }).to.throw(Error);

        const numberTwo = 1.5;
        expect(function() {
            Problem_5.chapterSixteenProblemFiveBruteForceSolution(numberTwo);
        }).to.throw(Error);

        const numberThree = -5;
        expect(function() {
            Problem_5.chapterSixteenProblemFiveBruteForceSolution(numberThree);
        }).to.throw(Error);
    });
    it('should return 0 for n = 4', function() {
        const numberOne = 4;
        assert.equal(Problem_5.chapterSixteenProblemFiveBruteForceSolution(numberOne), 0);
    });
    it('should return 1 for n = 5', function() {
        const numberOne = 5;
        assert.equal(Problem_5.chapterSixteenProblemFiveBruteForceSolution(numberOne), 1);
    });
});

describe('chapterSixteenProblemFiveImprovedSolution', function() {
    // it('should throw error when given wrong type', function() {
    //     const numberOne = 'hi';
    //     expect(function() {
    //         Problem_5.chapterSixteenProblemFiveImprovedSolution(numberOne);
    //     }).to.throw(Error);
    //
    //     const numberTwo = 1.5;
    //     expect(function() {
    //         Problem_5.chapterSixteenProblemFiveImprovedSolution(numberTwo);
    //     }).to.throw(Error);
    //
    //     const numberThree = -5;
    //     expect(function() {
    //         Problem_5.chapterSixteenProblemFiveImprovedSolution(numberThree);
    //     }).to.throw(Error);
    // });
    // it('should return 0 for n = 4', function() {
    //     const numberOne = 4;
    //     assert.equal(Problem_5.chapterSixteenProblemFiveImprovedSolution(numberOne), 0);
    // });
    it('should return 2 for n = 10', function() {
        const numberOne = 10;
        assert.equal(Problem_5.chapterSixteenProblemFiveImprovedSolution(numberOne), 2);
    });
    it('should return 4 for n = 23', function() {
        const numberOne = 23;
        assert.equal(Problem_5.chapterSixteenProblemFiveImprovedSolution(numberOne), 4);
    });
});
