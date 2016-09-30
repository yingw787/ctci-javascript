const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_4 = require('../CTCI_5/Chapter_16_Moderate/Problem_4');

// const TicTacToeGrid = [
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
// ];

describe('chapterSixteenProblemFourBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const TicTacToeGrid = 5;
        expect(function() {
            Problem_4.chapterSixteenProblemFourBruteForceSolution(TicTacToeGrid);
        }).to.throw(Error);
    });
    it('should return "X" for this grid', function() {
        const TicTacToeGrid = [
            ['O', ' ', 'O'],
            [' ', 'O', ' '],
            ['X', 'X', 'X'],
        ];
        assert.equal(Problem_4.chapterSixteenProblemFourBruteForceSolution(TicTacToeGrid), 'X');
    });
    it('should return "O" for this grid', function() {
        const TicTacToeGrid = [
            ['X', ' ', 'X'],
            [' ', 'X', ' '],
            ['O', 'O', 'O'],
        ];
        assert.equal(Problem_4.chapterSixteenProblemFourBruteForceSolution(TicTacToeGrid), 'O');
    });
    it('should return null for this grid', function() {
        const TicTacToeGrid = [
            ['X', 'O', 'X'],
            ['O', 'X', 'O'],
            ['O', 'X', 'O'],
        ];
        assert.equal(Problem_4.chapterSixteenProblemFourBruteForceSolution(TicTacToeGrid), null);
    });
});
