/*
    How would you design the data structures for a very large social network like Facebook or LinkedIn? Describe how you would design an algorithm to show the shortest path between two people (e.g. Me -> Bob -> Susan -> Jason -> You)
*/

/*
    ***SOCIAL NETWORK DATA STRUCTURE***

    PROPOSAL #1: Undirected Graph

    Advantages: Clear relationships established between people.
    Disadvantages: Much storage required because of duplicate references at each vertex.

    PROPOSAL #2: Heap

    Advantages: Can design priorities for people and rank them easily
    Disadvantages: Adding and removing people from your network is O(log N) time

    PROPOSAL #3: Trie

    Advantages: Easy to search for people given their name or other identifying information.
    Disadvantages: Collision handling may need some work, searching people by different criteria would necessitate many tries

    ***SHORTEST PATH***

    PROPOSAL #1: Bidirectional breadth-first-search

    Advantages: Will find shortest path between two people without going past
    Disadvantages: Finding many nodes that aren't part of the path and having to store them for the duration of the search may be costly.

    PROPOSAL #2: Dijkstra's algorithm

    Advantages: Will find shortest path between two nodes within a Graph with no extra storage
    Disadvantages: Need to store graph lengths for every pair of connections
*/

/*
    BOOK SOLUTION

    Use a graph, use breadth-first-search or bidirectional breadth-first-search
    DISADVANTAGE OF BIDIRECTIONAL BREADTH-FIRST-SEARCH IS THAT SOMETIMES YOU DON'T HAVE ACCESS TO THE FINAL NODE.

    ORGANIZE FRIENDS ON DIFFERENT SERVER CLUSTERS, BY CACHING OR PRIORITIZING FRIENDS, BY GEOGRAPHIC REGION
*/
