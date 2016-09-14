const chai = require('chai');
const assert = chai.assert;

const Problem_7 = require('../CTCI_5/Chapter_1_Arrays_And_Strings/Problem_7');

const twoNaryGrid = [
    ['a', 'b'],
    ['c', 'd'],
];

const threeNaryGrid = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
];

const twoNaryGridRotated = [
    ['c', 'a'],
    ['d', 'b'],
];

const threeNaryGridRotated = [
    ['g', 'd', 'a'],
    ['h', 'e', 'b'],
    ['i', 'f', 'c'],
];

const fourNaryGrid = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p'],
];

const fiveNaryGrid = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', 'i', 'j'],
    ['k', 'l', 'm', 'n', 'o'],
    ['p', 'q', 'r', 's', 't'],
    ['u', 'v', 'w', 'x', 'y'],
];

const fourNaryGridRotated = [
    ['m', 'i', 'e', 'a'],
    ['n', 'j', 'f', 'b'],
    ['o', 'k', 'g', 'c'],
    ['p', 'l', 'h', 'd'],
];

const fiveNaryGridRotated = [
    ['u', 'p', 'k', 'f', 'a'],
    ['v', 'q', 'l', 'g', 'b'],
    ['w', 'r', 'm', 'h', 'c'],
    ['x', 's', 'n', 'i', 'd'],
    ['y', 't', 'o', 'j', 'e'],
];

describe('chapterOneProblemSevenBruteForceSolution', function() {
    it('should give correct value here', function() {
        Problem_7.chapterOneProblemSevenBruteForceSolution(twoNaryGrid);
        assert.equal(JSON.stringify(twoNaryGrid), JSON.stringify(twoNaryGridRotated));
        Problem_7.chapterOneProblemSevenBruteForceSolution(threeNaryGrid);
        assert.equal(JSON.stringify(threeNaryGrid), JSON.stringify(threeNaryGridRotated));
        Problem_7.chapterOneProblemSevenBruteForceSolution(fourNaryGrid);
        assert.equal(JSON.stringify(fourNaryGrid), JSON.stringify(fourNaryGridRotated));
        Problem_7.chapterOneProblemSevenBruteForceSolution(fiveNaryGrid);
        assert.equal(JSON.stringify(fiveNaryGrid), JSON.stringify(fiveNaryGridRotated));
    });
});
