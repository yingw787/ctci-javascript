/*
    Given a list of people with their birth and death years, implement a method to compute the year with the most number of people alive. You may assume that all peope were born between 1900 and 2000 (inclusive). If a person was alive during any portion of that year, they should be included in that year's count. For example, Person (birth = 1908, death = 1909) is included in the counts for both 1908 and 1909.
*/
'use strict';

const assert = require('assert');

// O(N) time, N = listOfPeopleObjects.length;
// O(N) space
// TODO: REVIEW
function chapterSixteenProblemTenBruteForceSolution(listOfPeopleObjects) {
    // the year will always fall on a birth year, since it doesn't change when it's not a birth/death year and it only decrements on a death year.
    assert(typeof listOfPeopleObjects === 'object');
    const birthYears = {};
    const deathYears = {};

    let lowestBirthYear = Infinity;
    let highestBirthYear = -Infinity;
    for (let i = 0; i < listOfPeopleObjects.length; i++) {
        const currentPerson = listOfPeopleObjects[i];
        assert(typeof currentPerson.birth === 'number' && typeof currentPerson.death === 'number');
        if (currentPerson.birth > currentPerson.death) {
            throw new Error('invalid dates; birth date must be before death date.');
        }

        if (!(currentPerson.birth in birthYears)) {
            birthYears[currentPerson.birth] = 1;
        } else {
            birthYears[currentPerson.birth]++;
        }
        if (!(currentPerson.death in deathYears)) {
            deathYears[currentPerson.death] = 1;
        } else {
            deathYears[currentPerson.death]++;
        }

        if (currentPerson.birth < lowestBirthYear) {
            lowestBirthYear = currentPerson.birth;
        }
        if (currentPerson.birth > highestBirthYear) {
            highestBirthYear = currentPerson.birth;
        }
    }

    let maximumPeopleAliveYear = null;
    let maximumPeopleAlive = 0;
    let currentNumberOfPeopleAlive = 0;

    for (let i = lowestBirthYear; i <= highestBirthYear; i++) {
        if (i in birthYears) {
            currentNumberOfPeopleAlive += birthYears[i];
        }
        if (i in deathYears) {
            currentNumberOfPeopleAlive -= deathYears[i];
        }
        if (currentNumberOfPeopleAlive > maximumPeopleAlive) {
            maximumPeopleAlive = currentNumberOfPeopleAlive;
            maximumPeopleAliveYear = i;
        }
    }
    return maximumPeopleAliveYear;
}

module.exports = {
    chapterSixteenProblemTenBruteForceSolution: chapterSixteenProblemTenBruteForceSolution,
};
