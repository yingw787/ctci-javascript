const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_7 = require('../CTCI_5/Chapter_4_Trees_And_Graphs/Problem_7');

describe('chapterFourProblemSevenBruteForceSolution', function() {
    it('should give correct answer in acyclic graph', function() {
        const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
        const dependencies = [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']];

        const projectBuildOrder = Problem_7.chapterFourProblemSevenBruteForceSolution(projects, dependencies);
        const testProjectBuildOrder = ['e', 'f', 'a', 'b', 'd', 'c'];

        assert.equal(JSON.stringify(projectBuildOrder), JSON.stringify(testProjectBuildOrder));
    });
    it('should throw error in cyclic graph', function() {
        const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
        const dependencies = [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd'], ['a', 'd']];

        expect(function() {
            Problem_7.chapterFourProblemSevenBruteForceSolution(projects, dependencies);
        }).to.throw(Error);
    });
});
