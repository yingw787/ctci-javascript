/*
    Given two squares on a two-dimensional plane, find a line that would cut these two squares in half. Assume that the top and bottom sides of the square run parallel to the x-axis.
*/
'use strict';

const assert = require('assert');

// every line that divides a square in half must go through the centroid of the square.
// find the two centroids and create a line.
// return string representation of line, in format "y = mx + b"

// O(1) time
// O(1) space
// CORRECT NO REDO
function chapterSixteenProblemThirteenBruteForceSolution(squareOne, squareTwo) {
    _checkAssertionsForSquare(squareOne);
    _checkAssertionsForSquare(squareTwo);

    const centroidOfSquareOne = _findCentroidOfSquare(squareOne);
    const centroidOfSquareTwo = _findCentroidOfSquare(squareTwo);

    const lineEquationAsString = _createLine(centroidOfSquareOne, centroidOfSquareTwo);
    return lineEquationAsString;
}

function _checkAssertionsForSquare(square) {
    assert(typeof square === 'object');
    assert(typeof square.topLeftCorner === 'object' &&
            typeof square.bottomLeftCorner === 'object' &&
            typeof square.topRightCorner === 'object' &&
            typeof square.bottomRightCorner === 'object'
        );
    assert(typeof square.topLeftCorner.x === 'number' &&
            typeof square.topLeftCorner.y === 'number'
        );
    assert(typeof square.bottomLeftCorner.x === 'number' &&
            typeof square.bottomLeftCorner.y === 'number'
        );
    assert(typeof square.topRightCorner.x === 'number' &&
            typeof square.topRightCorner.y === 'number'
        );
    assert(typeof square.bottomRightCorner.x === 'number' &&
            typeof square.bottomRightCorner.y === 'number'
        );
    assert(square.topLeftCorner.y === square.topRightCorner.y);
    assert(square.bottomLeftCorner.y === square.bottomRightCorner.y);
    assert(square.topLeftCorner.x === square.bottomLeftCorner.x);
    assert(square.topRightCorner.x === square.bottomRightCorner.x);
    assert(square.topLeftCorner.y - square.bottomLeftCorner.y === square.topRightCorner.x - square.topLeftCorner.x);
}

function _findCentroidOfSquare(square) {
    const centroid = {};
    centroid.x = square.topLeftCorner.x + (square.topRightCorner.x - square.topLeftCorner.x) / 2;
    centroid.y = square.bottomLeftCorner.y + (square.topLeftCorner.y - square.bottomLeftCorner.y) / 2;
    return centroid;
}

function _createLine(pointOne, pointTwo) {
    if (JSON.stringify(pointOne) === JSON.stringify(pointTwo)) {
        return 'any';
    }
    if (pointOne.x === pointTwo.x) {
        return 'x = ' + pointOne.x;
    }
    const slope = (pointTwo.y - pointOne.y) / (pointTwo.x - pointOne.x);
    const yIntercept = (pointOne.y - (slope * pointOne.x));
    const line = 'y = ' + slope + 'x + ' + yIntercept;
    return line;
}

module.exports = {
    chapterSixteenProblemThirteenBruteForceSolution: chapterSixteenProblemThirteenBruteForceSolution,
};
