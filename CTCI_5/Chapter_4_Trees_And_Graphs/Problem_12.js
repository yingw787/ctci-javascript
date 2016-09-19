/*
    You are given a binary tree in which each node contains an integer value (which might be positive or negative). Design an algorithm to count the number of paths that sum to a given value. The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
*/

// BRUTE FORCE
// traverse the entire tree and add all generated paths from every node to an object with the sum value. If the sum value is equal to the target value, add the path to an array of paths. Return the array of paths.

// BRUTE FORCE SOLUTION, NOT IMPROVED, REDO PROBLEM
// NOTE YOU CAN SAVE VALUES AT EACH NODE
