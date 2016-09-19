/*
    You are implementing a binary tree class from scratch which, in addition to insert, find, and delete, has a method getRandomNode() which returns a random node from the tree. All nodes should be equally likely to be chosen. Design and implement an algorithm for getRandomNode, and explain how you would implement the rest of the methods.
*/

// BRUTE FORCE
// getRandomNode(): get in-order traversal of nodes, use Math.floor(Math.random() * traversedArray.length) in order to get an index, and then choose from traversedArray the random node.

// in order to build a binary tree class, use a BinarySearchTree class, set the data to be the value, and set the key to be a randomized hash of the value. Insert, find, and delete would be similar to that of a binary search tree.

// SLOW AND WORKING, REDO PROBLEM
// NOTE THAT THE BINARYTREE CLASS IS BUILT FROM SCRATCH, OPTIMIZE OTHER METHODS TO PLAY NICE WITH GETRANDOMNODE
