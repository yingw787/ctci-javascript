/*
    Imagine you are building some sort of service that will be called by up to 1,000 client applications to get simple end-of-day stock price information (open, close, high, low). You may assume that you already have the data, and you can store it in any format you wish. How would you design the client-facing service that provides the information to client applications? You are responsible for the development, rollout, and ongoing monitoring and maintenance of the feed. Describe the different methods you considered and why you would recommend your approach. Your service can use any technologies you wish, and can distribute the information to the client applications in any mechanism you choose.
*/

/*
    ASSUME: each client application calls one stock's information at a time.
    ASSUME: there are one billion stocks available to pick from (and store) at any given time.
    ASSUME: the client side service exists as a web application.
    ASSUME: there are two types of clients: enterprise and free.

    MEMORY MANAGEMENT:
    - HIGH LEVEL: Create a cache of ~100 (or near-intantaneous fetch size) stocks and store it in the computer of the client application where the client application is based. When the client calls a stock, the cache updates with the given stock. The cache replacement policy is LRU.
    - MID LEVEL: Create a small enterprise SQL database of 100,000 (or medium-speed fetch size) stocks and store it in the backend. When the enterprise client calls a stock and it's not within the cache, retrieve information from enterprise SQL server.
    - LOW LEVEL: Store every stock within a sorted SQL database cluster. Record their prices (open, close, high, low). Clients retrieve their information from this level if they do not possess the information in their cache or enterprise databases. Requests are compared according to the stock ticker and directed to the appropriate computer.

    Clients can make a request for a particular ticker. The request is forwarded to the memory management system and returns the data as ticker, (open, close, high, low).
*/

/*
    BOOK SOLUTION

    PROPOSAL #1: FTP server to download text files.
    ADVANTAGES: Easily maintainable, viewed, and backed up
    DISAVANTAGES: Complex parsing required, not updatable.

    PROPOSAL #2: SQL database
    ADVANTAGES: Easy to implement, integrable, and easy to do processing with.
    DISADVANTAGES: Complex, difficult to read, and insecure if not done properly.

    PROPOSAL #3: XML
    ADVANTAGES: Easy to implement, easily updatable, persistent, distributable, and easy to read
    DISADVANTAGES: Inefficient.

    TALK ABOUT ADVANTAGES AND DISADVANTAGES MORE
*/
