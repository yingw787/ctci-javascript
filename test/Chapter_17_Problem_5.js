const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_5 = require('../CTCI_5/Chapter_17_Hard/Problem_5');

describe('chapterSeventeenProblemFiveBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const arrayWithLettersAndNumbersOne = 'hi';
        expect(function() {
            Problem_5.chapterSeventeenProblemFiveBruteForceSolution(arrayWithLettersAndNumbersOne);
        }).to.throw(Error);
    });
    it('should return the array if its length is less than two', function() {
        const arrayWithLettersAndNumbersOne = [];
        assert.equal(JSON.stringify(Problem_5.chapterSeventeenProblemFiveBruteForceSolution(arrayWithLettersAndNumbersOne)), JSON.stringify([]));

        const arrayWithLettersAndNumbersTwo = ['a'];
        assert.equal(JSON.stringify(Problem_5.chapterSeventeenProblemFiveBruteForceSolution(arrayWithLettersAndNumbersTwo)), JSON.stringify(['a']));

        const arrayWithLettersAndNumbersThree = [3];
        assert.equal(JSON.stringify(Problem_5.chapterSeventeenProblemFiveBruteForceSolution(arrayWithLettersAndNumbersThree)), JSON.stringify([3]));
    });
    it('should return a subarray with an equal number of letters and numbers', function() {
        const arrayWithLettersAndNumbersOne = ['a', 1, 2, 'b', 2, 'c', 'd', 'e', 3, 4, 5, 6];
        assert.equal(JSON.stringify(Problem_5.chapterSeventeenProblemFiveBruteForceSolution(arrayWithLettersAndNumbersOne)), JSON.stringify(['a', 1, 2, 'b', 2, 'c', 'd', 'e', 3, 4]));
    });
});
