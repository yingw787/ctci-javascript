/*
    Design and build a "least recently used" cache, which evicts the least recently used item. The cache should map from keys to values (allowing you to insert and retrieve a value associated with a particular key) and be initialized with a max size. When it is full, it should evict the least recently used item.
*/

// TIMEOUT
// REDO CREATE CODE

/*
    BOOK SOLUTION

    Use a doubly linked list in order to order the elements of the cache by priority.
    Use a hash table in order to provide O(1) lookups for a given cache element.
    Connect the linked list and the hash table together, the hash table provides a reference for each node in the linked list.

    Inserting Key, Value Pair: Create a linked list node with key and value. Insert into head of linked list. Inserting key and node mapping into hash table.

    Retrieving Value by Key: Look up node in hash table and return value. Update most recently used item.

    Finding LRU: Tail of linked list.

    Updating LRU: Move node to front of linked list. Hash table does not need to be updated.

    Eviction: Remove tail of linked list. Get key from linked list node and remove key from hash table.
*/
