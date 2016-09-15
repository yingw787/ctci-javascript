const chai = require('chai');
const assert = chai.assert;

const Stack = require('../CTCI_5/Chapter_VII_Technical_Questions/Stack');

describe('Stack', function() {
    it('should be able to push and pop basic values', function() {
        const stack = new Stack();
        stack.push('hi');
        const value = stack.pop();
        assert.equal(value, 'hi');
    });
});
