'use strict';

const SinglyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

const Node = function(singlyLinkedListData) {
    this.data = singlyLinkedListData;
    this.next = null;
};

SinglyLinkedList.prototype.append = function(singlyLinkedListData) {
    const node = new Node(singlyLinkedListData);

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
};

SinglyLinkedList.prototype.get = function(index) {
    if (this.size < index + 1) {
        throw new Error('invalid index');
    } else {
        let currentIndex = 0;
        let n = this.head;
        while (n.next && currentIndex < index) {
            n = n.next;
            currentIndex += 1;
        }
        if (currentIndex === index) {
            return n;
        } else {
            return n.next;
        }
    }
};

SinglyLinkedList.prototype.remove = function(index) {
    if (this.size < index + 1) {
        throw new Error('invalid index');
    } else {
        let currentIndex = 0;
        let n = this.head;
        if (currentIndex === index) {
            if (n.next) {
                this.head = this.head.next;
            } else {
                this.head = null;
            }
            return n;
        } else {
            while (n.next) {
                if (currentIndex + 1 === index) {
                    let temp = n.next;
                    n.next = n.next.next;
                    return temp;
                }
                currentIndex += 1;
                n = n.next;
            }
            throw new Error('uncaught error, exited loop');
        }
    }
};

module.exports = SinglyLinkedList;
