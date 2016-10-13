/*
    Oh no! You have accidentally removed all spaces, punctuation, and capitalization in a lengthy document. A sentence like "I reset the computer. It still didn't boot!" became "iresetthecomputeritstilldidntboot". You'll deal with the punctuation and capitalization later; right now you need to re-insert the spaces. Most of the words are in a dictionary but a few are not. Given a dictionary (a list of strings) and the document (a string), design an algorithm to unconcatenate the document in a way that minimizes the number of unrecognized characters.
*/

/*
    MY SOLUTION

    For every string in the dictionary, search the document for a substring that matches. If there is a substring that matches, insert an escape character on both sides. When the dictionary search is exhausted, split the document by the escape character.

    O(M * N), M = length of dictionary, N = length of document
    O(1) space
*/

/*
    TODO: REVIEW SOLUTION AND ONLINE
*/
