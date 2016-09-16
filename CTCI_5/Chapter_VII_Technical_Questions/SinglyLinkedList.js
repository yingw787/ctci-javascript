'use strict';

const SinglyLinkedListNode = function(singlyLinkedListData) {
    this.data = singlyLinkedListData;
    this.next = null;
};

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(singlyLinkedListData) {
        const node = new SinglyLinkedListNode(singlyLinkedListData);

        if (this.head === null) {
            this.head = node;
        } else {
            let n = this.head;
            while (n.next) {
                n = n.next;
            }
            n.next = node;
        }
        this.size += 1;
        return node;
    }
    get(index) {
        if (this.size < index + 1) {
            throw new Error('invalid index');
        } else {
            let currentIndex = 0;
            let n = this.head;
            while (n.next !== null && currentIndex < index) {
                n = n.next;
                currentIndex += 1;
            }
            if (currentIndex === index) {
                return n;
            } else {
                return n.next;
            }
        }
    }
    remove(index) {
        if (this.size < index + 1) {
            throw new Error('invalid index');
        } else {
            let currentIndex = 0;
            let n = this.head;
            if (currentIndex === index) {
                if (n.next !== null) {
                    this.head = this.head.next;
                } else {
                    this.head = null;
                }
                this.size -= 1;
                return n;
            } else {
                while (n.next) {
                    if (currentIndex + 1 === index) {
                        let temp = n.next;
                        n.next = n.next.next;
                        this.size -= 1;
                        return temp;
                    }
                    currentIndex += 1;
                    n = n.next;
                }
                throw new Error('uncaught error, exited loop');
            }
        }
    }
}

module.exports = SinglyLinkedList;
