/*
    Given a two-dimensional graph with points on it, find a line which passes the most number of points.
*/
'use strict';

const assert = require('assert');

// O(N) time, N = arrayOfPoints.length
// O(N) space, N = arrayOfPoints.length
// REDO SOME CASES NOT HANDLED
function chapterSixteenProblemFourteenBruteForceSolution(arrayOfPoints) {
    _checkArrayOfPoints(arrayOfPoints);
    const arrayOfLineSlopesAndYIntercepts = [];
    for (let i = 0; i < arrayOfPoints.length - 1; i++) {
        for (let j = i + 1; j < arrayOfPoints.length; j++) {
            arrayOfLineSlopesAndYIntercepts.push(_generateSlopeAndYIntercept(arrayOfPoints[i], arrayOfPoints[j]));
        }
    }
    const mostFrequentlyAppearingLine = _findMostFrequentlyAppearingLine(arrayOfLineSlopesAndYIntercepts);
    return mostFrequentlyAppearingLine;
}

function _checkArrayOfPoints(arrayOfPoints) {
    assert(typeof arrayOfPoints === 'object');
    assert(arrayOfPoints.length > 1);
    for (let i = 0; i < arrayOfPoints.length; i++) {
        assert(typeof arrayOfPoints[i] === 'object');
        assert(typeof arrayOfPoints[i].x === 'number');
        assert(typeof arrayOfPoints[i].y === 'number');
    }
}

function _generateSlopeAndYIntercept(pointOne, pointTwo) {
    const lineRepresentation = {};
    if (pointTwo.x - pointOne.x === 0) {
        lineRepresentation.m = 'Infinity';
    } else {
        lineRepresentation.m = (pointTwo.y - pointOne.y) / (pointTwo.x - pointOne.x);
    }
    lineRepresentation.b = (pointTwo.y - (lineRepresentation.m * pointTwo.x));

    return lineRepresentation;
}

function _findMostFrequentlyAppearingLine(arrayOfLineSlopesAndYIntercepts) {
    const mapOfLineToFrequency = _addToMapOfLineToFrequency(arrayOfLineSlopesAndYIntercepts, {});
    let lineWithMaximumFrequency = null;
    let maxFrequency = 0;
    for (let line of Object.keys(mapOfLineToFrequency)) {
        if (!lineWithMaximumFrequency || mapOfLineToFrequency[line] > maxFrequency) {
            lineWithMaximumFrequency = line;
            maxFrequency = mapOfLineToFrequency[line];
        }
    }
    return lineWithMaximumFrequency;
}

function _addToMapOfLineToFrequency(arrayOfLineSlopesAndYIntercepts, map) {
    for (let i = 0; i < arrayOfLineSlopesAndYIntercepts.length; i++) {
        const key = JSON.stringify(arrayOfLineSlopesAndYIntercepts[i]);
        if (!(key in map)) {
            map[key] = 1;
        } else {
            map[key] = map[key] + 1;
        }
    }
    return map;
}

module.exports = {
    chapterSixteenProblemFourteenBruteForceSolution: chapterSixteenProblemFourteenBruteForceSolution,
};
