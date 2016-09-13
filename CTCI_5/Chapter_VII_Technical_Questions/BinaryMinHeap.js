'use strict';

const BinaryMinHeap = function(node) {
    this.minHeap = [];
    this.minHeap.push(null);
    this.size = this.minHeap.length - 1;
};

BinaryMinHeap.prototype.insert = function(value) {
    this.minHeap.push(value);
    this.size += 1;

    let parentIndex = Math.floor(this.size / 2);
    let childIndex = this.size;
    while (parentIndex > 0) {
        if (this.minHeap[parentIndex] > this.minHeap[childIndex]) {
            const temp = this.minHeap[parentIndex];
            this.minHeap[parentIndex] = this.minHeap[childIndex];
            this.minHeap[childIndex] = temp;
            childIndex = parentIndex;
            parentIndex = Math.floor(parentIndex / 2);
        } else {
            break;
        }
    }
    return;
};

BinaryMinHeap.prototype.remove = function() {
    const minIndex = 1;
    const childIndex = this.size;
    const minValue = this.minHeap[minIndex];

    this.minHeap[minIndex] = this.minHeap[childIndex];
    this.minHeap.pop();
    this.size -= 1;

    let parentIndex = minIndex;
    let childIndexOne = (parentIndex * 2) + 1;
    let childIndexTwo = (parentIndex * 2);
    while (childIndexOne <= this.size || childIndexTwo <= this.size) {
        const minChildOne = this.minHeap[childIndexOne] === undefined ? Infinity : this.minHeap[childIndexOne];
        const minChildTwo = this.minHeap[childIndexTwo] === undefined ? Infinity : this.minHeap[childIndexTwo];
        let minChild = Math.min(minChildOne, minChildTwo);
        const parent = this.minHeap[parentIndex];
        if (parent > minChild) {
            if (minChild === minChildOne) {
                const temp = this.minHeap[childIndexOne];
                this.minHeap[childIndexOne] = this.minHeap[parentIndex];
                this.minHeap[parentIndex] = temp;
                parentIndex = childIndexOne;
                childIndexOne = (parentIndex * 2) + 1;
                childIndexTwo = (parentIndex * 2);
            } else {
                const temp = this.minHeap[childIndexTwo];
                this.minHeap[childIndexTwo] = this.minHeap[parentIndex];
                this.minHeap[parentIndex] = temp;
                parentIndex = childIndexTwo;
                childIndexOne = (parentIndex * 2) + 1;
                childIndexTwo = (parentIndex * 2);
            }
        } else {
            break;
        }
    }
    return minValue;
};

module.exports = BinaryMinHeap;
