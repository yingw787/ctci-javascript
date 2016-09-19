/*
    Design an alogrithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.
*/
'use strict';

// cannot use binary search tree specific methods.
function _DFS(binaryTreeRootNode) {
    let values = [];

    function _recursiveDFS(treeNode) {
        if (!treeNode) { return; }
        values.push(treeNode.key);
        if (treeNode.leftChild && values.indexOf(treeNode.leftChild.key) === -1) {
            _recursiveDFS(treeNode.leftChild);
        }
        if (treeNode.rightChild && values.indexOf(treeNode.rightChild.key) === -1) {
            _recursiveDFS(treeNode.rightChild);
        }
    }

    _recursiveDFS(binaryTreeRootNode);
    values = values.splice(1, values.length);

    let leftSubtreeArray = [];
    let rightSubtreeArray = [];

    if (binaryTreeRootNode.rightChild) {
        leftSubtreeArray = values.slice(0, values.indexOf(binaryTreeRootNode.rightChild.key));
        rightSubtreeArray = values.slice(values.indexOf(binaryTreeRootNode.rightChild.key), values.length);
    } else {
        leftSubtreeArray = values;
    }

    const result = [];
    result.push(leftSubtreeArray);
    result.push(rightSubtreeArray);

    return result;
}

function _checkWhichSubtree(subtreeRootNode, compareNode) {
    const values = _DFS(subtreeRootNode);
    const leftSubtreeArray = values[0];
    const rightSubtreeArray = values[1];

    if (leftSubtreeArray.indexOf(compareNode.key) !== -1) {
        return 'left';
    } else if (rightSubtreeArray.indexOf(compareNode.key) !== -1) {
        return 'right';
    } else {
        throw new Error('compareNode not found within left or right subtrees.');
    }
}

module.exports = {
    chapterFourProblemEightBruteForceSolution: (binaryTree, nodeOne, nodeTwo) => {
        // check if node exists from root. If so, check whether nodeOne and nodeTwo exist on same subtree. if so, move to subtree and repeat. When they are not on the same subtree, return that node.

        let currentNode = binaryTree.root;

        let nodeOneSubtree = _checkWhichSubtree(currentNode, nodeOne);
        let nodeTwoSubtree = _checkWhichSubtree(currentNode, nodeTwo);

        while (nodeOneSubtree === nodeTwoSubtree) {
            if (nodeOneSubtree === 'left') {
                currentNode = currentNode.leftChild;
                nodeOneSubtree = _checkWhichSubtree(currentNode, nodeOne);
                nodeTwoSubtree = _checkWhichSubtree(currentNode, nodeTwo);
            } else {
                currentNode = currentNode.rightChild;
                nodeOneSubtree = _checkWhichSubtree(currentNode, nodeOne);
                nodeTwoSubtree = _checkWhichSubtree(currentNode, nodeTwo);
            }
        }

        return currentNode.key;
    },
};
