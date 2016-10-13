/*
    You have a large text file containing words. Given any two words, find the shortest distance (in terms of number of words) between them in the file. If the operation will be repeated many times for the same file (but different pairs of words), can you optimize your solution?
*/

/*
    MY SOLUTION

    Find the shortest distance between two words only

    Split the text file into an array.
    Find the indexes of one word, and find the indexes of the other word.
    Find the least difference between the two indexes.

    Run the algorithm multiple times for different pairs of words

    Build a graph between different words
    If you see both words within the graph
    Take the distances between the nodes as the minimum distance between the nodes.
*/

/*
    BOOK SOLUTION

    Find the shortest distance between two words only

    Traverse the text file.
    Find out the last locations that we have seen word1 and word2.
    If the difference between the locations is smaller than the current minimum, update the minimum locations and the difference.
    Return the difference.

    Run the algorithm multiple times for different pairs of words

    Build a hash table mapping words to locations the words are in.
    If both words are in hash table, then find the minimum location between the two words by incrementing either the index for word1 or index for word2.

    Precomputation takes O(N) time, N = length of text file
    Calculation is O(A + B), A = number of occurences of word1, B = number of occurences in word2.
    TODO: BUILD OUT BOOK SOLUTION
*/
