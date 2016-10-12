const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_8 = require('../CTCI_5/Chapter_16_Moderate/Problem_8');

describe('chapterSixteenProblemEightBookSolution', function() {
    it('should throw error when given wrong type', function() {
        const numberOne = 'hi';
        expect(function() {
            Problem_8.chapterSixteenProblemEightBookSolution(numberOne);
        }).to.throw(Error);

        const numberTwo = 5.4;
        expect(function() {
            Problem_8.chapterSixteenProblemEightBookSolution(numberTwo);
        }).to.throw(Error);
    });
    it('should return correct value for ones digit', function() {
        const numberOne = 0;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberOne), 'Zero');

        const numberTwo = 1;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberTwo), 'One');

        const numberThree = 2;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberThree), 'Two');

        const numberFour = 4;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberFour), 'Four');

        const numberFive = 8;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberFive), 'Eight');
    });
    it('should return correct value for tens digit', function() {
        const numberOne = 16;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberOne), 'Sixteen');

        const numberTwo = 32;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberTwo), 'Thirty Two');

        const numberThree = 64;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberThree), 'Sixty Four');
    });
    it('should return correct value for hundreds digit', function() {
        const numberOne = 128;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberOne), 'One Hundred Twenty Eight');

        const numberTwo = 256;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberTwo), 'Two Hundred Fifty Six');

        const numberThree = 512;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberThree), 'Five Hundred Twelve');
    });
    it('should return correct value for thousands digit', function() {
        const numberOne = 1024;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberOne), 'One Thousand Twenty Four');

        const numberTwo = 2048;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberTwo), 'Two Thousand Fourty Eight');

        const numberThree = 4096;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberThree), 'Four Thousand Ninety Six');

        const numberFour = 8192;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberFour), 'Eight Thousand One Hundred Ninety Two');
    });
    it('should return correct value for millions digit', function() {
        const numberOne = 1048576;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberOne), 'One Million Fourty Eight Thousand Five Hundred Seventy Six');

    });
    it('should return correct value for billions digit', function() {
        const numberOne = 1073741824;
        assert.equal(Problem_8.chapterSixteenProblemEightBookSolution(numberOne), 'One Billion Seventy Three Million Seven Hundred Fourty One Thousand Eight Hundred Twenty Four');
    });
});
