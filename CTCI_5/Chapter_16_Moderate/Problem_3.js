/*
    Given two straight line segments (represented as a start point and an end point), compute the point of intersection, if any.
*/
'use strict';

const assert = require('assert');

function _createSlopeAndYInterceptFromLineSegment(lineSegment) {
    const slope = (lineSegment.y2 - lineSegment.y1) / (lineSegment.x2 - lineSegment.x1);
    const yIntercept = lineSegment.y1 - (slope * lineSegment.x1);

    return {
        slope: slope,
        yIntercept: yIntercept,
    };
}

function _createInterceptFromSlopeAndYIntercept(slopeAndYInterceptOne, slopeAndYInterceptTwo) {
    if ((slopeAndYInterceptOne.slope - slopeAndYInterceptTwo.slope) === 0) {
        return null;
    }
    const x = (slopeAndYInterceptTwo.yIntercept - slopeAndYInterceptOne.yIntercept) / (slopeAndYInterceptOne.slope - slopeAndYInterceptTwo.slope);
    const y = (slopeAndYInterceptOne.slope * x) + slopeAndYInterceptOne.yIntercept;
    return {
        x: x,
        y: y,
    };
}

function chapterSixteenProblemThreeBruteForceSolution(lineSegmentOne, lineSegmentTwo) {
    assert(typeof lineSegmentOne === 'object');
    assert(typeof lineSegmentTwo === 'object');

    assert(typeof lineSegmentOne.x1 === 'number');
    assert(typeof lineSegmentOne.x2 === 'number');
    assert(typeof lineSegmentTwo.y1 === 'number');
    assert(typeof lineSegmentTwo.y2 === 'number');

    // compute y = mx + b for both lines, and then see whether a system of equations would create a point of intersection. Then see whether the intersection point is within the segment boundaries.

    const slopeAndYInterceptOne = _createSlopeAndYInterceptFromLineSegment(lineSegmentOne);
    const slopeAndYInterceptTwo = _createSlopeAndYInterceptFromLineSegment(lineSegmentTwo);

    const possibleIntercept = _createInterceptFromSlopeAndYIntercept(slopeAndYInterceptOne, slopeAndYInterceptTwo);
    if (!possibleIntercept) {
        return null;
    }

    if (possibleIntercept.x < Math.min(lineSegmentOne.x1, lineSegmentOne.x2) ||
        possibleIntercept.x < Math.min(lineSegmentTwo.x1, lineSegmentTwo.x2) ||
        possibleIntercept.x > Math.max(lineSegmentOne.x1, lineSegmentOne.x2) ||
        possibleIntercept.x > Math.max(lineSegmentTwo.x1, lineSegmentTwo.x2) ||
        possibleIntercept.y < Math.min(lineSegmentOne.y1, lineSegmentOne.y2) ||
        possibleIntercept.y < Math.min(lineSegmentTwo.y1, lineSegmentTwo.y2) ||
        possibleIntercept.y > Math.max(lineSegmentOne.y1, lineSegmentOne.y2) ||
        possibleIntercept.y > Math.max(lineSegmentTwo.y1, lineSegmentTwo.y2)) {
        return null;
    }

    return possibleIntercept;
}

module.exports = {
    chapterSixteenProblemThreeBruteForceSolution: chapterSixteenProblemThreeBruteForceSolution,
};
