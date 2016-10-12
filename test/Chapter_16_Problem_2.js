const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Problem_2 = require('../CTCI_5/Chapter_16_Moderate/Problem_2');

describe('chapterSixteenProblemTwoBruteForceSolution', function() {
    it('should throw error when given wrong type', function() {
        const bookPassage = 5;
        const word = 1;
        expect(function() {
            Problem_2.chapterSixteenProblemTwoBruteForceSolution(bookPassage, word);
        }).to.throw(Error);
    });
    it('should swap values', function() {
        const bookPassage = "How very wrong he was. Mr. Dursley might have been drifting into an uneasy sleep, but the cat on the wall outside was showing no sign of sleepiness. It was sitting as still as a statue, its eyes fixed unblinkingly on the far corner of Privet Drive. It didn't so much as quiver when a car door slammed on the next street, nor when two owls swooped overhead. In fact, it was nearly midnight before the cat moved at all. A man appeared on the corner the cat had been watching, appeared so suddenly and silently you'd have thought he'd just popped out of the ground. The cat's tail twitched and its eyes narrowed. Nothing like this man had ever been seen on Privet Drive. He was tall, thin, and very old, judging by the silver of his hair and beard, which were both long enough to tuck into his belt. He was wearing long robes, a purple cloak that swept the ground, and high-heeled, buckled boots. His blue eyes were light, bright, and sparkling behind half-moon spectacles and his nose was very long and crooked, as though it had been broken at least twice. This man's name was Albus Dumbledore. Albus Dumbledore didn't seem to realize that he had just arrived in a street where everything from his name to his boots was unwelcome. He was busy rummaging in his cloak, looking for something. But he did seem to realize he was being watched, because he looked up suddenly at the cat, which was still staring at him from the other end of the street. For some reason, the sight of the cat seemed to amuse him. He chuckled and muttered,";
        const word = 'Dursley';
        assert.equal(Problem_2.chapterSixteenProblemTwoBruteForceSolution(bookPassage, word), 1);
    });
});
