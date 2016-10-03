const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_2 = require('../CTCI_5/Chapter_10_Sorting_And_Searching/Problem_2');

describe('chapterTenProblemTwoBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const sortedArrayA_1 = 5;
        expect(function() {
            Problem_2.chapterTenProblemTwoBruteForceSolution(sortedArrayA_1);
        }).to.throw(Error);
    });
    it("should return ['curiae emir', 'marie curie', 'frenzy gorout', 'frozen yogurt', 'frozen yogurt', 'hatingsown', 'washington'] from ['curiae emir', 'hatingsown', 'frenzy gorout', 'frozen yogurt', 'frozen yogurt', 'washington', 'marie curie']", function() {
        const sortedArrayA_1 = ['curiae emir', 'hatingsown', 'frenzy gorout', 'frozen yogurt', 'frozen yogurt', 'washington', 'marie curie'];
        const sortedArray = Problem_2.chapterTenProblemTwoBruteForceSolution(sortedArrayA_1);
        assert.equal(JSON.stringify(sortedArray), JSON.stringify(['curiae emir', 'marie curie', 'frenzy gorout', 'frozen yogurt', 'frozen yogurt', 'hatingsown', 'washington']));
    });
});
