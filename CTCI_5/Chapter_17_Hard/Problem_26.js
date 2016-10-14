/*
    The similarity of two documents (each with distinct words) is defined to be the size of the intersection divided by the size of the union. For example, if the documents consist of integers, the similarity of {1, 5, 3} and {1, 7, 2, 3} is 0.4, because the intersection has size 2 and the union has size 5.

    We have a long list of documents (with distinct values and each with an associated ID) where the similarity is believed to be "sparse". That is, any two arbitrarily selected documents are very likely to have similarity 0. Design an algorithm that returns a list of pairs of document IDs and the associated similarity.

    Print only the pairs with similarity greater than 0. Empty documents should not be printed at all. For simplicity, you may assume each document is represented as an array of distinct integers.

    EXAMPLE

    Input:

    13: {14, 15, 100, 9, 3}
    16: {32, 1, 9, 3, 5}
    19: {15, 29, 2, 6, 8, 7}
    24: {7, 10}

    Output:

    ID1, ID2 : SIMILARITY
    13, 19 : 0.1
    13, 16: 0.25
    19, 24 : 0.14285714...
*/

/*
    BRUTE FORCE SOLUTION

    For each distinct pair of documents:
    Find the intersection. If the size of the intersection is greater than 0, then the similarity will be greater than 0. Only then calculate the size of the union.
    If the similarity is greater than 0, then print the document numbers and the calculated similarity to console.

    O(N ^ 2 * (A + B)) time, N = number of documents, A = length of the first document, B = length of the second document
    O(1) space

    IMPROVED SOLUTION

    Precompute the list of documents by building an hashmap mapping from a document to every other document that has at least one element in both. Only compare similarities for documents that are mapped within the hashmap.

    IMPROVED SOLUTION

    Take all the words within the document, and throw them into a hashmap, mapping from the word to the hashmap that it is found. Filter out words that have less than 2 documents mapped to it. For each word still in the hashmap, add the array of words to a set. Compute similarities between the documents in the set.
*/

/*
    BOOK SOLUTION

    Build a hash table mapping between each word to each document it is found in.
    Build a new hash table mapping from a document pair to the size of the intersection, as an integer.
    Read the first hash table by iterating through each list of documents.
    For each list of documents, iterate through the pairs in that list. Increment the intersection count for each pair.

    O(P * W + D * W) time, P = pairs of documents that are similar, W = maximum length of each document, D = number of documents.
    O(D * W) space
*/
