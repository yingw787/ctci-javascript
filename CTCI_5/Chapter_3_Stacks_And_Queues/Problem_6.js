/*
    An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in LinkedList data structure.
*/
'use strict';

const QueueNode = function(queueData) {
    this.data = queueData.data;
    this.type = queueData.type;
    this.next = null;
};

const SinglyLinkedList = require('../Chapter_VII_Technical_Questions/SinglyLinkedList');

// CORRECT NO REDO
class dogCatQueue {
    constructor() {
        this.head = null;
        this.size = 0;
        this.catList = new SinglyLinkedList();
        this.dogList = new SinglyLinkedList();
    }
    enqueue(queueData) {
        const newNode = new QueueNode(queueData);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        if (newNode.type === 'DOG') {
            this.dogList.append(newNode);
        } else if (newNode.type === 'CAT') {
            this.catList.append(newNode);
        } else {
            throw new Error("type must be 'DOG' or 'CAT'.");
        }

        this.size += 1;
    }
    dequeueAny() {
        const originalHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }

        if (originalHead.type === 'DOG') {
            if (this.dogList.head.next) {
                this.dogList.head = this.dogList.head.next;
            } else {
                this.dogList.head = null;
            }
        } else if (originalHead.type === 'CAT') {
            if (this.catList.head.next) {
                this.catList.head = this.catList.head.next;
            } else {
                this.catList.head = null;
            }
        } else {
            throw new Error("type must be 'DOG' or 'CAT'.");
        }

        return originalHead;
    }
    dequeueDog() {
        let returnedNode = null;
        let currentNode = this.head;

        if (currentNode.type === 'DOG') {
            returnedNode = currentNode;
            if (this.head.next) {
                this.head = this.head.next;
            } else {
                this.head = null;
            }
        } else {
            while (currentNode.next) {
                if (currentNode.next.type === 'DOG') {
                    returnedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                    break;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (returnedNode !== null) {
            if (this.dogList.head.next) {
                this.dogList.head = this.dogList.head.next;
            } else {
                this.dogList.head = null;
            }
        }

        return returnedNode;
    }
    dequeueCat() {
        let returnedNode = null;
        let currentNode = this.head;

        if (currentNode.type === 'CAT') {
            returnedNode = currentNode;
            if (this.head.next) {
                this.head = this.head.next;
            } else {
                this.head = null;
            }
        } else {
            while (currentNode.next) {
                if (currentNode.next.type === 'CAT') {
                    returnedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                    break;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (returnedNode !== null) {
            if (this.catList.head.next) {
                this.catList.head = this.catList.head.next;
            } else {
                this.catList.head = null;
            }
        }

        return returnedNode;
    }
    isEmpty() {
        return this.head === null;
    }
}

module.exports = {
    chapterThreeProblemSixBruteForceSolution: dogCatQueue,
};
