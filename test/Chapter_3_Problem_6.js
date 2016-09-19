const chai = require('chai');
const assert = chai.assert;

const Problem_6 = require('../CTCI_5/Chapter_3_Stacks_And_Queues/Problem_6');

describe('chapterThreeProblemSixBruteForceSolution', function() {
    it('should initialize correctly', function() {
        const dogCatQueue = new Problem_6.chapterThreeProblemSixBruteForceSolution();
        assert.equal(dogCatQueue.isEmpty(), true);
    });
    it('should be able to dequeue objects', function() {
        const dogCatQueue = new Problem_6.chapterThreeProblemSixBruteForceSolution();
        assert.equal(dogCatQueue.isEmpty(), true);

        for (let i = 0; i < 15; i++) {
            const dogOrCat = i % 2;
            const dogOrCatObject = {
                data: dogOrCat ? 'Dog ' + i : 'Cat ' + i,
                type: dogOrCat ? 'DOG' : 'CAT',
            };
            dogCatQueue.enqueue(dogOrCatObject);
        }

        const catOne = dogCatQueue.dequeueAny();

        const catOneTest = {
            data: 'Cat 0',
            type: 'CAT',
        };

        assert.equal(catOne.data, catOneTest.data);
        assert.equal(catOne.type, catOneTest.type);

        const dogOne = dogCatQueue.dequeueAny();

        const dogOneTest = {
            data: 'Dog 1',
            type: 'DOG',
        };

        assert.equal(dogOne.data, dogOneTest.data);
        assert.equal(dogOne.type, dogOneTest.type);
    });
    it('should be able to dequeue cats only', function() {
        const dogCatQueue = new Problem_6.chapterThreeProblemSixBruteForceSolution();
        assert.equal(dogCatQueue.isEmpty(), true);

        const dogArray = [];
        const catArray = [];

        for (let i = 0; i < 15; i++) {
            const dogOrCat = Math.floor(Math.random() * 2);
            const dogOrCatObject = {
                data: dogOrCat ? 'Dog ' + i : 'Cat ' + i,
                type: dogOrCat ? 'DOG' : 'CAT',
            };
            if (dogOrCat) {
                dogArray.push(dogOrCatObject);
            } else {
                catArray.push(dogOrCatObject);
            }
            dogCatQueue.enqueue(dogOrCatObject);
        }

        while (!dogCatQueue.isEmpty()) {
            if (catArray.length !== 0) {
                const catObject = dogCatQueue.dequeueCat();
                if (catObject === null) { break; }
                const testCatObject = catArray.shift();
                assert.equal(catObject.data, testCatObject.data);
                assert.equal(catObject.type, testCatObject.type);
            }

            if (dogArray.length !== 0) {
                const dogObject = dogCatQueue.dequeueDog();
                if (dogObject === null) { break; }
                const testDogObject = dogArray.shift();
                assert.equal(dogObject.data, testDogObject.data);
                assert.equal(dogObject.type, testDogObject.type);
            }
        }
    });
});
