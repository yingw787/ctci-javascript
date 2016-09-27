/*
    You have 10 billion URLs. How do you detect the duplicate documents? In this case, assume "duplicate" means that the URLs are identical.
*/

/*
    You could have a network of hashtables, that match a URL prefix to a trie. The trie would store the URL string starting from a given prefix. If the trie becomes too large, increment the prefix, create a new trie, and replace the old trie with the new trie in the hash table. At the end of the trie, there would be a linked list of various documents, with assigned signatures based on content. If the signatures match, the content matches, and you could add the signature to a result.
*/

/*
    BOOK SOLUTION

    Simple answer: Store all the URLs in a hash table mapping from the URL to whether there's a duplicate URL found in the list of URLs.

    More complicated answer: Store the URLs in multiple hard drives in one pass, based on their hash. In the next pass, check each hard drive and repeat the simple answer.

    Even more complicated answer: Use the same procedure as above, but use multiple machines. Advantage is to parallelize the operation, disadvantage is that failures may go undetected and the results need to be aggrgated at the end.
*/
