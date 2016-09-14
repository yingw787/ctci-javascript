'use strict';

const MIN_INDEX = 1;

class BinaryMinHeap {
    constructor(node) {
        this.minHeap = [null];
        this.size = 0;
    }
    insert(value) {
        this.minHeap.push(value);
        this.size += 1;

        let parentIndex = Math.floor(this.size / 2);
        let childIndex = this.size;
        while (parentIndex > 0) {
            if (this.minHeap[parentIndex] > this.minHeap[childIndex]) {
                const valueAtParentIndex = this.minHeap[parentIndex];
                this.minHeap[parentIndex] = this.minHeap[childIndex];
                this.minHeap[childIndex] = valueAtParentIndex;
                childIndex = parentIndex;
                parentIndex = Math.floor(parentIndex / 2);
            } else {
                break;
            }
        }
        return;
    }
    remove() {
        const childIndex = this.size;
        const minValue = this.minHeap[MIN_INDEX];

        this.minHeap[MIN_INDEX] = this.minHeap[childIndex];
        this.minHeap.pop();
        this.size -= 1;

        let parentIndex = MIN_INDEX;
        let {leftChildIndex, rightChildIndex} = this._getChildIndexes(parentIndex);

        while (leftChildIndex <= this.size || rightChildIndex <= this.size) {
            const minChildOne = this.minHeap[leftChildIndex] === undefined ? Infinity : this.minHeap[leftChildIndex];
            const minChildTwo = this.minHeap[rightChildIndex] === undefined ? Infinity : this.minHeap[rightChildIndex];
            let minChild = Math.min(minChildOne, minChildTwo);
            const parent = this.minHeap[parentIndex];
            if (parent > minChild) {
                if (minChild === minChildOne) {
                    const temp = this.minHeap[leftChildIndex];
                    this.minHeap[leftChildIndex] = this.minHeap[parentIndex];
                    this.minHeap[parentIndex] = temp;
                    parentIndex = leftChildIndex;
                    leftChildIndex = this._getChildIndexes(parentIndex).leftChildIndex;
                    rightChildIndex = this._getChildIndexes(parentIndex).rightChildIndex;
                } else {
                    const temp = this.minHeap[rightChildIndex];
                    this.minHeap[rightChildIndex] = this.minHeap[parentIndex];
                    this.minHeap[parentIndex] = temp;
                    parentIndex = rightChildIndex;
                    leftChildIndex = this._getChildIndexes(parentIndex).leftChildIndex;
                    rightChildIndex = this._getChildIndexes(parentIndex).rightChildIndex;
                }
            } else {
                break;
            }
        }
        return minValue;
    }
    _getChildIndexes(parentIndex) {
        return {
            leftChildIndex: (parentIndex * 2) + 1,
            rightChildIndex: (parentIndex * 2),
        };
    }
}

module.exports = BinaryMinHeap;
