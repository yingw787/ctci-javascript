const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_13 = require('../CTCI_5/Chapter_16_Moderate/Problem_13');

describe('chapterSixteenProblemThirteenBruteForceSolution', function() {
    it('should throw an error upon incorrect type for inputs', function() {
        const squareOne = 5.4;
        const squareTwo = 'hi';
        expect(function() {
            Problem_13.chapterSixteenProblemThirteenBruteForceSolution(squareOne, squareTwo);
        }).to.throw(Error);
    });
    it('should throw an error upon inputs not being squares', function() {
        const squareOne = {
            'topLeftCorner': {
                'x': 1,
                'y': 3,
            },
            'bottomLeftCorner': {
                'x': 1,
                'y': 1,
            },
            'topRightCorner': {
                'x': 5,
                'y': 3,
            },
            'bottomRightCorner': {
                'x': 5,
                'y': 1,
            },
        };
        const squareTwo = {
            'topLeftCorner': {
                'x': 6,
                'y': 3,
            },
            'bottomLeftCorner': {
                'x': 6,
                'y': 1,
            },
            'topRightCorner': {
                'x': 10,
                'y': 3,
            },
            'bottomRightCorner': {
                'x': 10,
                'y': 1,
            },
        };
        expect(function() {
            Problem_13.chapterSixteenProblemThirteenBruteForceSolution(squareOne, squareTwo);
        }).to.throw(Error);
    });
    it('should throw an error upon squares not being parallel to the x axis', function() {
        const squareOne = {
            'topLeftCorner': {
                'x': 0,
                'y': 1,
            },
            'bottomLeftCorner': {
                'x': 1,
                'y': 2,
            },
            'topRightCorner': {
                'x': 2,
                'y': 1,
            },
            'bottomRightCorner': {
                'x': 1,
                'y': 0,
            },
        };
        const squareTwo = {
            'topLeftCorner': {
                'x': 3,
                'y': 1,
            },
            'bottomLeftCorner': {
                'x': 4,
                'y': 2,
            },
            'topRightCorner': {
                'x': 5,
                'y': 1,
            },
            'bottomRightCorner': {
                'x': 4,
                'y': 0,
            },
        };
        expect(function() {
            Problem_13.chapterSixteenProblemThirteenBruteForceSolution(squareOne, squareTwo);
        }).to.throw(Error);
    });
    it('should return y = 0x + 1.5 with these two squares', function() {
        const squareOne = {
            'topLeftCorner': {
                'x': 1,
                'y': 2,
            },
            'bottomLeftCorner': {
                'x': 1,
                'y': 1,
            },
            'topRightCorner': {
                'x': 2,
                'y': 2,
            },
            'bottomRightCorner': {
                'x': 2,
                'y': 1,
            },
        };
        const squareTwo = {
            'topLeftCorner': {
                'x': 3,
                'y': 2,
            },
            'bottomLeftCorner': {
                'x': 3,
                'y': 1,
            },
            'topRightCorner': {
                'x': 4,
                'y': 2,
            },
            'bottomRightCorner': {
                'x': 4,
                'y': 1,
            },
        };
        assert.equal(Problem_13.chapterSixteenProblemThirteenBruteForceSolution(squareOne, squareTwo), 'y = 0x + 1.5');
    });
    it('should return y = 1x + 0 with these two squares', function() {
        const squareOne = {
            'topLeftCorner': {
                'x': 1,
                'y': 2,
            },
            'bottomLeftCorner': {
                'x': 1,
                'y': 1,
            },
            'topRightCorner': {
                'x': 2,
                'y': 2,
            },
            'bottomRightCorner': {
                'x': 2,
                'y': 1,
            },
        };
        const squareTwo = {
            'topLeftCorner': {
                'x': 3,
                'y': 4,
            },
            'bottomLeftCorner': {
                'x': 3,
                'y': 3,
            },
            'topRightCorner': {
                'x': 4,
                'y': 4,
            },
            'bottomRightCorner': {
                'x': 4,
                'y': 3,
            },
        };
        assert.equal(Problem_13.chapterSixteenProblemThirteenBruteForceSolution(squareOne, squareTwo), 'y = 1x + 0');
    });
    it('should return y = 1x + 0 with these two squares', function() {
        const squareOne = {
            'topLeftCorner': {
                'x': 1,
                'y': 3,
            },
            'bottomLeftCorner': {
                'x': 1,
                'y': 2,
            },
            'topRightCorner': {
                'x': 2,
                'y': 3,
            },
            'bottomRightCorner': {
                'x': 2,
                'y': 2,
            },
        };
        const squareTwo = {
            'topLeftCorner': {
                'x': 3,
                'y': 5,
            },
            'bottomLeftCorner': {
                'x': 3,
                'y': 4,
            },
            'topRightCorner': {
                'x': 4,
                'y': 5,
            },
            'bottomRightCorner': {
                'x': 4,
                'y': 4,
            },
        };
        assert.equal(Problem_13.chapterSixteenProblemThirteenBruteForceSolution(squareOne, squareTwo), 'y = 1x + 1');
    });
    it('should return "any" if centroids overlap', function() {
        const squareOne = {
            'topLeftCorner': {
                'x': 1,
                'y': 3,
            },
            'bottomLeftCorner': {
                'x': 1,
                'y': 2,
            },
            'topRightCorner': {
                'x': 2,
                'y': 3,
            },
            'bottomRightCorner': {
                'x': 2,
                'y': 2,
            },
        };
        const squareTwo = {
            'topLeftCorner': {
                'x': 1,
                'y': 3,
            },
            'bottomLeftCorner': {
                'x': 1,
                'y': 2,
            },
            'topRightCorner': {
                'x': 2,
                'y': 3,
            },
            'bottomRightCorner': {
                'x': 2,
                'y': 2,
            },
        };
        assert.equal(Problem_13.chapterSixteenProblemThirteenBruteForceSolution(squareOne, squareTwo), 'any');
    });
    it('should return x = centroid of squares if centroid ys are the same', function() {
        const squareOne = {
            'topLeftCorner': {
                'x': 1,
                'y': 2,
            },
            'bottomLeftCorner': {
                'x': 1,
                'y': 1,
            },
            'topRightCorner': {
                'x': 2,
                'y': 2,
            },
            'bottomRightCorner': {
                'x': 2,
                'y': 1,
            },
        };
        const squareTwo = {
            'topLeftCorner': {
                'x': 1,
                'y': 4,
            },
            'bottomLeftCorner': {
                'x': 1,
                'y': 3,
            },
            'topRightCorner': {
                'x': 2,
                'y': 4,
            },
            'bottomRightCorner': {
                'x': 2,
                'y': 3,
            },
        };
        assert.equal(Problem_13.chapterSixteenProblemThirteenBruteForceSolution(squareOne, squareTwo), 'x = 1.5');
    });
});
