/*
    Given a list of words, write a program to find the longest word made of other words in the list.

    EXAMPLE

    Input: cat, banana, dog, nana, walk, walker, dogwalker
    Output: dogwalker
*/

/*
    Eliminate words from the array that are substrings of another word in the array, since they are definitely shorter and a longer word has it is made up using it.
    Eliminate words from the array that aren't substrings of any word in the array, since the longest word must be made up of other words in the list.
    If the array is empty, return null.
    If the array is not empty, return the longest string.

    Input processed: banana, dogwalker (nana, walk, dog, walker are all substrings of dogwalker or each other, cat isn't in any of the other strings)
    Output: dogwalker

    O(N * N) time
    O(1) space
    REDO FOR WORDS MADE COMPLETELY OUT OF OTHER WORDS IN THE ARRAY (banana would not count, since ba is not in the input).
*/
