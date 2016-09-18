/*
    Given a directed graph, design an alogrithm to find out whether there is a route between two nodes.
*/
'use strict';

function _createHashFromString(inputString) {
    let hash = 0;
    for (let i = 0; i < inputString.length; i++) {
        hash += parseInt(inputString.charCodeAt(i), 10);
    }
    return hash;
}

function _generateHashCode(data) {
    const dataHash = _createHashFromString(data);
    return Math.floor(7 * (dataHash >> 32));
}

class DirectedGraphNode {
    constructor(data) {
        this.hashCode = _generateHashCode(data);
        this.data = data;
        this.connectedNodes = {};
    }
    getHashCode() {
        return this.hashCode;
    }
    addConnectedNode(graphNode) {
        const hashCode = graphNode.hashCode;
        this.connectedNodes[hashCode] = graphNode;
    }
    hasConnectedNode(graphNode) {

        return this.connectedNodes.hasOwnProperty(graphNode.hashCode);
    }
    deleteConnectedNode(graphNode) {
        delete this.connectedNodes[graphNode.hashCode];
    }
}

class DirectedGraph {
    constructor() {
        this.graphNodesObject = {};
    }
    addGraphNode(data) {
        const newGraphNode = new DirectedGraphNode(data);
        const newGraphNodeHashCode = newGraphNode.getHashCode();
        this.graphNodesObject[newGraphNodeHashCode] = newGraphNode;
        return newGraphNodeHashCode;
    }
    deleteGraphNode(graphNodeHashCode) {
        delete this.graphNodesObject[graphNodeHashCode];
    }
    addEdge(graphNodeOneHashCode, graphNodeTwoHashCode) {
        const graphNodeOne = this.graphNodesObject[graphNodeOneHashCode];
        const graphNodeTwo = this.graphNodesObject[graphNodeTwoHashCode];
        if (graphNodeOne === undefined || graphNodeTwo === undefined) {
            throw new Error('either graphNodeOne or graphNodeTwo is undefined.');
        } else {
            graphNodeOne.addConnectedNode(graphNodeTwo);
        }
    }
    deleteEdge(graphNodeOneHashCode, graphNodeTwoHashCode) {
        const graphNodeOne = this.graphNodesObject[graphNodeOneHashCode];
        const graphNodeTwo = this.graphNodesObject[graphNodeTwoHashCode];
        if (graphNodeOne === undefined || graphNodeTwo === undefined) {
            throw new Error('either graphNodeOne or graphNodeTwo is undefined.');
        } else {
            graphNodeOne.deleteConnectedNode(graphNodeTwo);
        }
    }
    isValidPath(graphNodeOneHashCode, graphNodeTwoHashCode) {
        const graphNodeOne = this.graphNodesObject[graphNodeOneHashCode];
        const graphNodeTwo = this.graphNodesObject[graphNodeTwoHashCode];

        return graphNodeOne.hasConnectedNode(graphNodeTwo);
    }
    isEmpty() {
        return JSON.stringify(this.graphNodesObject) === JSON.stringify({});
    }
}

module.exports = DirectedGraph;
