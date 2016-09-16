'use strict';

class QueueAsArray {
    constructor() {
        this._beginningIndex = 0;
        this._items = [];
    }
    enqueue(item) {
        this._items.push(item);
    }
    dequeueIfNotEmpty() {
        if (this._beginningIndex === this._items.length) {
            return null;
        }
        const dequeuedItem = this._items[this._beginningIndex];
        this._beginningIndex++;
        if (this._items.length - this._beginningIndex > 50) {
            this._items = this._items.slice(this._beginningIndex, this._items.length);
        }
        return dequeuedItem;
    }
}

module.exports = QueueAsArray;
