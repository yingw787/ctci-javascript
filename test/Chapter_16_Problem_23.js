const chai = require('chai');
const assert = chai.assert;

const Problem_23 = require('../CTCI_5/Chapter_16_Moderate/Problem_23');

describe('chapterSixteenProblemTwentyThreeBruteForceSolution', function() {
    it('the distribution of values falls between the mean with a deviation of 1% of the total number of calculated random values', function() {
        const distribution = {};
        const epsilon = 1000;

        for (let i = 0; i < 100000; i++) {
            const value = Problem_23.chapterSixteenProblemTwentyThreeBruteForceSolution();
            if (value >= 0 && value < 1) {
                if (!distribution.zeros) {
                    distribution.zeros = 1;
                } else {
                    distribution.zeros++;
                }
            } else if (value >= 1 && value < 2) {
                if (!distribution.ones) {
                    distribution.ones = 1;
                } else {
                    distribution.ones++;
                }
            } else if (value >= 2 && value < 3) {
                if (!distribution.twos) {
                    distribution.twos = 1;
                } else {
                    distribution.twos++;
                }
            } else if (value >= 3 && value < 4) {
                if (!distribution.threes) {
                    distribution.threes = 1;
                } else {
                    distribution.threes++;
                }
            } else if (value >= 4 && value < 5) {
                if (!distribution.fours) {
                    distribution.fours = 1;
                } else {
                    distribution.fours++;
                }
            } else if (value >= 5 && value < 6) {
                if (!distribution.fives) {
                    distribution.fives = 1;
                } else {
                    distribution.fives++;
                }
            }
            else {
                if (!distribution.other) {
                    distribution.other = 1;
                } else {
                    distribution.other++;
                }
            }
        }

        const mean = _generateMeanFromDistribution(distribution);

        for (let bucket of Object.keys(distribution)) {
            assert(distribution[bucket] >= mean - epsilon && distribution[bucket] <= mean + epsilon);
        }
    });
});

function _generateMeanFromDistribution(distribution) {
    let sum = 0;
    for (let key of Object.keys(distribution)) {
        sum += distribution[key];
    }
    return sum / Object.keys(distribution).length;
}
