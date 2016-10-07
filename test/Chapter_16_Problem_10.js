const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_9 = require('../CTCI_5/Chapter_16_Moderate/Problem_9');

describe('multiply', function() {
    it('should throw an error upon incorrect inputs', function() {
        const numberOne = 5;
        const numberTwo = 'hi';
        expect(function() {
            Problem_9.multiply(numberOne, numberTwo);
        }).to.throw(Error);

        const numberThree = 5.4;
        const numberFour = 5;
        expect(function() {
            Problem_9.multiply(numberThree, numberFour);
        }).to.throw(Error);
    });
    it('should return correct answer for positive a and positive b', function() {
        const numberOne = 3;
        const numberTwo = 3;
        assert.equal(Problem_9.multiply(numberOne, numberTwo), 9);
    });
    it('should return correct answer for positive a and negative b', function() {
        const numberOne = 3;
        const numberTwo = -3;
        assert.equal(Problem_9.multiply(numberOne, numberTwo), -9);
    });
    it('should return correct answer for negative a and positive b', function() {
        const numberOne = -3;
        const numberTwo = 3;
        assert.equal(Problem_9.multiply(numberOne, numberTwo), -9);
    });
    it('should return correct answer for negative a and negative b', function() {
        const numberOne = -3;
        const numberTwo = -3;
        assert.equal(Problem_9.multiply(numberOne, numberTwo), 9);
    });
});

describe('subtract', function() {
    it('should throw an error upon incorrect types', function() {
        const numberOne = 5;
        const numberTwo = 'hi';
        expect(function() {
            Problem_9.subtract(numberOne, numberTwo);
        }).to.throw(Error);

        const numberThree = 5.4;
        const numberFour = 5;
        expect(function() {
            Problem_9.subtract(numberThree, numberFour);
        }).to.throw(Error);
    });
    it('should return a negative value for positive a, positive b, and b > a', function() {
        const a = 5;
        const b = 7;
        assert.equal(Problem_9.subtract(a, b), -2);
    });
    it('should return a positive value for positive a, positive b, and b < a', function() {
        const a = 7;
        const b = 5;
        assert.equal(Problem_9.subtract(a, b), 2);
    });
    it('should return a negative value for negative a, positive b, and b > a', function() {
        const a = -5;
        const b = 7;
        assert.equal(Problem_9.subtract(a, b), -12);
    });
    it('should return a negative value for negative a, positive b, and b < a', function() {
        const a = -5;
        const b = 3;
        assert.equal(Problem_9.subtract(a, b), -8);
    });
    it('should return a positive value for negative a, negative b, and b > a', function() {
        const a = -5;
        const b = -7;
        assert.equal(Problem_9.subtract(a, b), 2);
    });
    it('should return a negative value for negative a, negative b, and b < a', function() {
        const a = -5;
        const b = -3;
        assert.equal(Problem_9.subtract(a, b), -2);
    });
    it('should return a positive value for positive a, negative b, and b > a', function() {
        const a = 5;
        const b = -3;
        assert.equal(Problem_9.subtract(a, b), 8);
    });
    it('should return a positive value for positive a, negative b, and b < a', function() {
        const a = -5;
        const b = 3;
        assert.equal(Problem_9.subtract(a, b), -8);
    });
});

describe('divide', function() {
    it('should throw an error upon incorrect types', function() {
        const numberOne = 5;
        const numberTwo = 'hi';
        expect(function() {
            Problem_9.divide(numberOne, numberTwo);
        }).to.throw(Error);

        const numberThree = 5.4;
        const numberFour = 5;
        expect(function() {
            Problem_9.divide(numberThree, numberFour);
        }).to.throw(Error);
    });
    it('should return 0 for all Math.abs(b) > Math.abs(a)', function() {
        const a0 = 5;
        const b0 = 7;
        assert.equal(Problem_9.divide(a0, b0), 0);

        const a1 = -5;
        const b1 = 7;
        assert.equal(Problem_9.divide(a1, b1), 0);

        const a2 = 5;
        const b2 = -7;
        assert.equal(Problem_9.divide(a2, b2), 0);

        const a3 = -5;
        const b3 = -7;
        assert.equal(Problem_9.divide(a3, b3), 0);
    });
    it('should return Math.ceil(a / b) for all a and b where b < a', function() {
        const a0 = 16;
        const b0 = 5;
        assert.equal(Problem_9.divide(a0, b0), 4);

        const a1 = -16;
        const b1 = 5;
        assert.equal(Problem_9.divide(a1, b1), -4);

        const a2 = 16;
        const b2 = -5;
        assert.equal(Problem_9.divide(a2, b2), -4);

        const a3 = -16;
        const b3 = -5;
        assert.equal(Problem_9.divide(a3, b3), 4);
    });
});
