/*
    Given two words of equal length that are in a dictionary, write a method to transform one word into another word by changing only one letter at a time. The new word you get in each step must be in the dictionary.

    EXAMPLE

    Input: DAMP, LIKE
    Output: DAMP --> LAMP --> LIMP --> LIME --> LIKE
*/

/*
    BRUTE FORCE SOLUTION

    ASSUMPTION: DICTIONARY IS PRESENT

    Change one letter from the first word to a letter from the second word.
    Check whether the word is within the dictionary. If it is not, break out of the recursive cycle. If it is, add it to a memoized array.
    Check whether the word is the same word as the second word. If it is, return the array.

    O(K ^ K) time, K = length of each word
    O(K) space, K = length of each word

    IMPROVED SOLUTION

    precompute words that are one letter away from the second word.
    Create a mapping in the dictionary by grouping together words.
    b_ll: {bill, ball, bell, bull, etc.}

    Then when changing the first word, check the respective grouping to see what words are available. Recurse through those words.

    EVEN MORE IMPROVED SOLUTION

    Take the improved solution as described from above, and instead of doing depth-first search on the result, use breadth-first search instead.

    OPTIMAL SOLUTION

    Add in every word from the mapping into a graph, and do bidirectional breadth-first search on it from both the source word and the result word.

    O(K) time, K = length of each word
    O(K) space

    TODO: REVIEW
*/
