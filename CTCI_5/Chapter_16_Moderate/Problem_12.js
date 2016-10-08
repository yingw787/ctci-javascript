/*
    Since XML is very verbose, you are given a way of encoding it where each tag gets mapped to a pre-defined integer value. The language/grammar is as follows:

    Element --> Tag Attributes END Children END
    Atttribute --> Tag Value
    END --> 0
    Tag --> some predefined mapping to integer
    Value --> string value END

    For example, the following XML might be converted into the compressed string below (assuming a mapping of family -> 1, person -> 2, firstName -> 3, lastName -> 4, state -> 5).

    <family lastName="McDowell" state="CA">
        <person firstName="Gayle">Some Message</person>
    </family>

    Becomes:

    1 4 McDowell 5 CA 0 2 3 Gayle 0 Some Message 0 0.
*/
'use strict';

const assert = require('assert');

// REDO: FIND XML PARSER IN JAVASCRIPT AND CREATE OWN
function chapterSixteenProblemTwelveBookSolution(filePath, mapOfXMLElementsToIntegers) {
    assert(typeof filePath === 'string' && typeof mapOfXMLElementsToIntegers === 'object');


}

module.exports = {
    chapterSixteenProblemTwelveBookSolution: chapterSixteenProblemTwelveBookSolution,
};
