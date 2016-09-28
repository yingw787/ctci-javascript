/*
    Imagine a web server for a simplified search engine. This system has 100 machines to respond to search queries, which may then call out using processSearch(string query) to another cluster of machines to actually get the result. The machine which responds to a given query is chosen at random, so you cannot guarantee that the same machine will always respond to the same request. The method processSearch is very expensive. Design a caching mechanism for the most recent queries. Be sure to explain how you would update the cache when data changes.
*/

/*
    One simple method would be to store a cache within every single machine. Every time processSearch is called, the query and its data is updated throughout all computers within the network. When processSearch is called with the same query parameters in a given time frame, the computer that recieved the query searches its cache for the result, and if it is found, returns that result. The cache is flushed for that query after a given time in order to maintain fidelity to the actual results.

    Advantages: Routing doesn't matter, and uptime is guaranteed as long as one computer is still active.
    Disadvantages: More limited storage, since all the queries have to be replicated across all computers. Significant network problems may result.

    Another method (slightly more complicated) would be to store the query and data in the computer that performed the operation, then update every machine's cache with the query and the computer that has the latest version. When processSearch is called with the same query parameters in a given time frame, the computer that recieved the query searches the cache for the query, and if it is found, forwards the request to the computer that has the latest data. That computer returns the query result to the client. Cache flushes on query timeout remain in place.

    Advantages: More data can be cached, since hashes of computer ids take up less space than the query result.
    Disadvantages: Computer and network failure issues need to be addressed.
*/

/*
    BOOK SOLUTION:

    MISSED ASSUMPTION: Most popular queries are extremely popular, such that they would always appear in the cache.
    MISSED ASSUMPTION: Cache would be very large, in the millions.

    REDO TAKE A LOOK AT DETAIL OF CACHE IMPLEMENTATION AND HOW TO CHANGE RESULTS BASED ON processSearch CHANGES.
*/
