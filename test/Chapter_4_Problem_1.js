const chai = require('chai');
const assert = chai.assert;

const Problem_1 = require('../CTCI_5/Chapter_4_Trees_And_Graphs/Problem_1');

describe('ChapterFourProblemOneBruteForceSolution', function() {
    it('should initialize correctly', function() {
        const directedGraph = new Problem_1.ChapterFourProblemOneBruteForceSolution();
        assert.equal(directedGraph.isEmpty(), true);
    });
    it('should be able to add and get nodes easily', function() {
        const directedGraph = new Problem_1.ChapterFourProblemOneBruteForceSolution();
        assert.equal(directedGraph.isEmpty(), true);

        const graphNodeOneHashCode = directedGraph.addGraphNode('Hello Sam');
        const graphNodeTwoHashCode = directedGraph.addGraphNode('Hello Bambi');

        assert.equal(directedGraph.isValidPath(graphNodeOneHashCode, graphNodeTwoHashCode), false);

        directedGraph.addEdge(graphNodeOneHashCode, graphNodeTwoHashCode);

        assert.equal(directedGraph.isValidPath(graphNodeOneHashCode, graphNodeTwoHashCode), true);
        assert.equal(directedGraph.isValidPath(graphNodeTwoHashCode, graphNodeOneHashCode), false);
    });
});
