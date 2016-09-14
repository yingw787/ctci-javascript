const chai = require('chai');
const assert = chai.assert;

const Problem_3 = require('../CTCI_5/Chapter_1_Arrays_And_Strings/Problem_3');

describe('chapterOneProblemThreeBruteForceSolution', function() {
    it('should give correct value here', function() {
        const spaces = Problem_3.chapterOneProblemThreeBruteForceSolution('a a a a');
        assert.equal(spaces, 'a%20a%20a%20a');
        const noSpaces = Problem_3.chapterOneProblemThreeBruteForceSolution('aaa');
        assert.equal(noSpaces, 'aaa');
    });
});
