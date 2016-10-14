/*
    Given a list of millions of words, design an algorithm to create the largest possible rectangle of letters such that every row forms a word (reading left to right) and every column forms a word (reading top to bottom). The words need not be chosen consecutively from the list, but all rows must be the same length and all columns must be the same height.
*/

/*
    Sort the words in the dictionary by their length.

    For every word length possible:
    build a trie.
    For every word:
    include each character in the word as part of the first level in the trie.
    Continue adding words from the same length.
    If the trie indicates that any column is not within the dictionary,
    Reset the trie and start again.

    O(?) time
    O(N) space, N = size of the dictionary

    IMPROVED SOLUTION

    Use two tries: one that stores the characters of each word going sideways, and one that stores the characters across words of the same length going down.
*/

/*
    BOOK SOLUTION

    Preprocess the dictionary into an array of groupings, where each element in the array is the list of words of length i.

    Within the maximum possible size of the rectangle (which would be the longest word squared), try to make a rectangle.

    Build a trie in order to check the prefixes down every character in the length of the word rectangle.

    Use recursive backtracking in order to create rectangles of given length i:
    Start with a given word of length i, and append to the rectangle (initialized to be null).
    Recurse by checking every single word from the same grouping.
    If the trie remains valid, then continue to append words to the word rectangle.
    Otherwise, if the word rectangle forms a valid word, and the size greater than the max size (number of characters), store the size of the rectangle and the rectangle itself.
    If the trie does not remain valid, end the recursion.

    Return the max size of the word rectangle and the max word rectangle.
*/
