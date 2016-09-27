/*
    If you were designing a web crawler, how would you avoid getting into infinite loops?
*/

/*
    A web crawler functions by going to a particular URL, adding in all the hyperlinks in that webpage to a queue of need-to-visit hyperlinks in addition to indexing that particular web page, and then visiting the other URLs. This is similar to breadth-first-search. Therefore, there needs to be a way in order to index the web page for future reference. I would create a hash table of the URL and metadata and add in a hash of the webpage whenever I visit it. Whenever I go to a new hyperlink, I check the hash table to see if I visited it already. If I did, then I continue recursing.
*/

/*
    BOOK SOLUTION

    Hashing might work...but there's the program of including URL parameters for application routing. Those would change parameters within a web application but wouldn't change the location of the site. Crawling based on content alone wouldn't work either if there's randomly generated content on a particular webpage.

    SOLUTION: Create a hash table that maps webpages to signatures. Assign a priority to a webpage the crawler visits to a particular signature. If something with that signature has been crawled recently, assign it a lower priority and reinsert it into the queue. If desired, set a minimum priority for a webpage in order for the crawler to visit it. This will allow the crawler to terminate crawling the web with minimum cycles.
*/
