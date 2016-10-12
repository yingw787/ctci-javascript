const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_12 = require('../CTCI_5/Chapter_16_Moderate/Problem_12');

describe('chapterSixteenProblemTwelveBruteForceSolution', function() {
    it('should throw an error upon incorrect inputs', function() {
        const XMLFilePath = 5;
        const MapOfXMLElementsToIntegers = 'hi';
        expect(function() {
            Problem_12.chapterSixteenProblemTwelveBruteForceSolution(XMLFilePath, MapOfXMLElementsToIntegers);
        }).to.throw(Error);
    });
    it('should parse the test XML file correctly', function() {
        const XMLFilePath = '../../resources/Chapter_16_Problem_12_TestCaseOne.xml';
        const MapOfXMLElementsToIntegers = {
            'family': 1,
            'person': 2,
            'firstName': 3,
            'lastName': 4,
            'state': 5,
        };
        // assert.equal(Problem_12.chapterSixteenProblemTwelveBookSolution(XMLFilePath, MapOfXMLElementsToIntegers), '1 4 McDowell 5 CA 0 2 3 Gayle 0 Some Message 0 0');
    });
});
