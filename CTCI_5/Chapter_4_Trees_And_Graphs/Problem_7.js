/*
    You are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the first project is dependent on the second project). All of a project's dependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.
*/
'use strict';

const DirectedGraph = require('../Chapter_VII_Technical_Questions/DirectedGraph');
const Queue = require('../Chapter_VII_Technical_Questions/Queue');
const assert = require('assert');

function _createVisitedObject(hashCodeLetterObject) {
    const keys = Object.keys(hashCodeLetterObject);
    const visitedObject = {};
    for (let i = 0; i < keys.length; i++) {
        visitedObject[keys[i]] = false;
    }
    return visitedObject;
}

function _cyclesExist(listOfDependencies) {
    const listOfInvertedDependencies = [];
    for (let i = 0; i < listOfDependencies.length; i++) {
        listOfInvertedDependencies.push([listOfDependencies[i][1], listOfDependencies[i][0]]);
    }

    for (let i = 0; i < listOfInvertedDependencies.length; i++) {
        for (let j = 0; j < listOfDependencies.length; j++) {
            if (JSON.stringify(listOfInvertedDependencies[i]) === JSON.stringify(listOfDependencies[j])) {
                return true;
            }
        }
    }
    return false;
}

function _BFS(visitedObject, directedGraph, hashCodeLetterObject, rootNode) {
    const result = [];
    const queue = new Queue();

    visitedObject[rootNode] = true;
    queue.enqueue(rootNode);

    while (!queue.isEmpty()) {
        const node = queue.dequeue();
        result.push(node.data);

        const nodeHashCode = hashCodeLetterObject[node.data];
        const graphNode = directedGraph.graphNodesObject[nodeHashCode.toString()];

        const nodeChildren = [];
        const connectedNodesHashCodes = Object.keys(graphNode.connectedNodes);

        for (let i = 0; i < connectedNodesHashCodes.length; i++) {
            nodeChildren.push(graphNode.connectedNodes[connectedNodesHashCodes[i]].data);
        }

        for (let i = 0; i < nodeChildren.length; i++) {
            if (!visitedObject[nodeChildren[i]]) {
                visitedObject[nodeChildren[i]] = true;
                queue.enqueue(nodeChildren[i]);
            }
        }
    }

    return result;
}

// O(Math.max(N, M * M)) time, N = length of listOfProjects, M = length of listOfDependencies
// O(M + N) space
// REDO (O(N + M) time, O(N) space)
function chapterFourProblemSevenBruteForceSolution(listOfProjects, listOfDependencies) {
    assert(typeof listOfProjects === 'object');
    assert(typeof listOfDependencies === 'object');

    if (_cyclesExist(listOfDependencies)) {
        throw new Error('no valid build order detected.');
    }

    const directedGraph = new DirectedGraph();
    const hashCodeLetterObject = {};

    let roots = listOfProjects.slice();

    for (let i = 0; i < listOfDependencies.length; i++) {
        const dependentProject = listOfDependencies[i][0];
        const independentProject = listOfDependencies[i][1];

        if (roots.indexOf(dependentProject) !== -1) {
            roots.splice(roots.indexOf(dependentProject), 1);
        }
        if (!(dependentProject in hashCodeLetterObject)) {
            const dependentProjectHashCode = directedGraph.addGraphNode(dependentProject);
            hashCodeLetterObject[dependentProject] = dependentProjectHashCode;
        }
        if (!(independentProject in hashCodeLetterObject)) {
            const independentProjectHashCode = directedGraph.addGraphNode(independentProject);
            hashCodeLetterObject[independentProject] = independentProjectHashCode;
        }
        directedGraph.addEdge(hashCodeLetterObject[independentProject], hashCodeLetterObject[dependentProject]);
    }

    for (let i = 0; i < roots.length; i++) {
        if (!(roots[i] in hashCodeLetterObject)) {
            const rootProjectHashCode = directedGraph.addGraphNode(roots[i]);
            hashCodeLetterObject[roots[i]] = rootProjectHashCode;
        }
    }

    let results = [];

    const visitedObject = _createVisitedObject(hashCodeLetterObject);

    for (let i = 0; i < roots.length; i++) {
        const rootNodeBFSResults = _BFS(visitedObject, directedGraph, hashCodeLetterObject, roots[i]);
        results.push.apply(results, rootNodeBFSResults);
    }

    return results;
}

module.exports = {
    chapterFourProblemSevenBruteForceSolution: chapterFourProblemSevenBruteForceSolution,
};
