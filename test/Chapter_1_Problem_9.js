const chai = require('chai');
const assert = chai.assert;

const Problem_9 = require('../CTCI_5/Chapter_1_Arrays_And_Strings/Problem_9');

describe('chapterOneProblemNineBruteForceSolution', function() {
    it('should give correct value here', function() {
        const isRotation = Problem_9.chapterOneProblemNineBruteForceSolution('erbottlewat', 'waterbottle');
        assert.equal(isRotation, true);
        const isNotRotation = Problem_9.chapterOneProblemNineBruteForceSolution('erbottlewat', 'nytimes.com');
        assert.equal(isNotRotation, false);
    });
});
