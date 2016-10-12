const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_1 = require('../CTCI_5/Chapter_17_Hard/Problem_1');

describe('chapterSeventeenProblemOneBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const inputOne = 'hi';
        const inputTwo = [];
        expect(function() {
            Problem_1.chapterSeventeenProblemOneBruteForceSolution(inputOne, inputTwo);
        }).to.throw(Error);
    });
    it('should add a positive integer and a positive integer together correctly', function() {
        const inputOne_1 = 1;
        const inputTwo_1 = 1;
        assert.equal(Problem_1.chapterSeventeenProblemOneBruteForceSolution(inputOne_1, inputTwo_1), 2);

        const inputOne_2 = 5000;
        const inputTwo_2 = 12345;
        assert.equal(Problem_1.chapterSeventeenProblemOneBruteForceSolution(inputOne_2, inputTwo_2), 17345);

        const inputOne_3 = 12;
        const inputTwo_3 = 12;
        assert.equal(Problem_1.chapterSeventeenProblemOneBruteForceSolution(inputOne_3, inputTwo_3), 24);
    });
    it('should add a positive integer and a negative integer together correctly', function() {
        const inputOne_1 = 1;
        const inputTwo_1 = -1;
        assert.equal(Problem_1.chapterSeventeenProblemOneBruteForceSolution(inputOne_1, inputTwo_1), 0);

        const inputOne_2 = -1;
        const inputTwo_2 = 1;
        assert.equal(Problem_1.chapterSeventeenProblemOneBruteForceSolution(inputOne_2, inputTwo_2), 0);

        const inputOne_3 = -1;
        const inputTwo_3 = 11;
        assert.equal(Problem_1.chapterSeventeenProblemOneBruteForceSolution(inputOne_3, inputTwo_3), 10);

        const inputOne_4 = 1;
        const inputTwo_4 = -11;
        assert.equal(Problem_1.chapterSeventeenProblemOneBruteForceSolution(inputOne_4, inputTwo_4), -10);
    });
    it('should add a negative integer and a negative integer together correctly', function() {
        const inputOne_1 = -1;
        const inputTwo_1 = -1;
        assert.equal(Problem_1.chapterSeventeenProblemOneBruteForceSolution(inputOne_1, inputTwo_1), -2);

        const inputOne_2 = -5000;
        const inputTwo_2 = -12345;
        assert.equal(Problem_1.chapterSeventeenProblemOneBruteForceSolution(inputOne_2, inputTwo_2), -17345);

        const inputOne_3 = -12;
        const inputTwo_3 = -12;
        assert.equal(Problem_1.chapterSeventeenProblemOneBruteForceSolution(inputOne_3, inputTwo_3), -24);
    });
});
