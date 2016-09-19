/*
    T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an algorithm to determine if T2 is a subtree of T1.

    A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2. That is, if you cut off the tree at node n, the two trees would be identical.
*/

// BRUTE FORCE
// Traverse T1 in order to find a node identical to the root of T2.
// if such a node is not found, return false.
// if such a node is found, write a _isSubtree function that compares a given node in subtree T1 to the same positioned node in T2.
// if such two nodes are different (including different children), return false.
// if traverse completes and nothing different is found, return true.

// IDENTICAL TO BOOK, CORRECT
