/*
    Given a directed graph, design an alogrithm to find out whether there is a route between two nodes.
*/
'use strict';

const assert = require('assert');

function _createHashFromString(input) {
    assert(typeof input === 'string');

    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        hash += parseInt(input.charCodeAt(i), 10);
    }
    return hash;
}

function _generateHashCode(data) {
    assert(typeof data === 'string');

    const dataHash = _createHashFromString(data);
    return Math.floor(7 * (dataHash >> 32));
}

// CORRECT NO REDO
class DirectedGraphNode {
    constructor(data) {
        assert(typeof data === 'string');

        this.hashCode = _generateHashCode(data);
        this.data = data;
        this.connectedNodes = {};
    }
    getHashCode() {
        return this.hashCode;
    }
    addConnectedNode(graphNode) {
        assert(typeof graphNode === 'object');

        const hashCode = graphNode.hashCode;
        this.connectedNodes[hashCode] = graphNode;
    }
    hasConnectedNode(graphNode) {
        assert(typeof graphNode === 'object');

        return this.connectedNodes.hasOwnProperty(graphNode.hashCode);
    }
    deleteConnectedNode(graphNode) {
        assert(typeof graphNode === 'object');

        delete this.connectedNodes[graphNode.hashCode];
    }
}

class DirectedGraph {
    constructor() {
        this.graphNodesObject = {};
    }
    addGraphNode(data) {
        assert(typeof data === 'string');

        const newGraphNode = new DirectedGraphNode(data);
        const newGraphNodeHashCode = newGraphNode.getHashCode();
        this.graphNodesObject[newGraphNodeHashCode] = newGraphNode;
        return newGraphNodeHashCode;
    }
    deleteGraphNode(graphNodeHashCode) {
        assert(typeof graphNodeHashCode === 'number');

        delete this.graphNodesObject[graphNodeHashCode];
    }
    addEdge(graphNodeOneHashCode, graphNodeTwoHashCode) {
        assert(typeof graphNodeOneHashCode === 'number');
        assert(typeof graphNodeTwoHashCode === 'number');

        const graphNodeOne = this.graphNodesObject[graphNodeOneHashCode];
        const graphNodeTwo = this.graphNodesObject[graphNodeTwoHashCode];
        if (graphNodeOne === undefined || graphNodeTwo === undefined) {
            throw new Error('either graphNodeOne or graphNodeTwo is undefined.');
        } else {
            graphNodeOne.addConnectedNode(graphNodeTwo);
        }
    }
    deleteEdge(graphNodeOneHashCode, graphNodeTwoHashCode) {
        assert(typeof graphNodeOneHashCode === 'number');
        assert(typeof graphNodeTwoHashCode === 'number');

        const graphNodeOne = this.graphNodesObject[graphNodeOneHashCode];
        const graphNodeTwo = this.graphNodesObject[graphNodeTwoHashCode];
        if (graphNodeOne === undefined || graphNodeTwo === undefined) {
            throw new Error('either graphNodeOne or graphNodeTwo is undefined.');
        } else {
            graphNodeOne.deleteConnectedNode(graphNodeTwo);
        }
    }
    isValidPath(graphNodeOneHashCode, graphNodeTwoHashCode) {
        assert(typeof graphNodeOneHashCode === 'number');
        assert(typeof graphNodeTwoHashCode === 'number');

        const graphNodeOne = this.graphNodesObject[graphNodeOneHashCode];
        const graphNodeTwo = this.graphNodesObject[graphNodeTwoHashCode];

        return graphNodeOne.hasConnectedNode(graphNodeTwo);
    }
    isEmpty() {
        return JSON.stringify(this.graphNodesObject) === JSON.stringify({});
    }
}

module.exports = {
    ChapterFourProblemOneBruteForceSolution: DirectedGraph,
};
