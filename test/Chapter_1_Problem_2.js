const chai = require('chai');
const assert = chai.assert;

const Problem_2 = require('../CTCI_5/Chapter_1_Arrays_And_Strings/Problem_2');

describe('chapterOneProblemTwoBruteForceSolution', function() {
    it('should give correct value here', function() {
        const same = Problem_2.chapterOneProblemTwoBruteForceSolution('aaa', 'aaa');
        assert.equal(same, true);
        const different = Problem_2.chapterOneProblemTwoBruteForceSolution('aaa', 'aab');
        assert.equal(different, false);
    });
});
