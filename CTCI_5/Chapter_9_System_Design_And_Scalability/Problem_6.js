/*
    A large eCommerce company wishes to list the best-selling products, overall and by category. For example, one product might be the #1056th best-selling product overall but the #13th best-selling product under "Sports Equipment" and the #24th best-selling product under "Safety". Describe how you would design this system.
*/

/*
    BRUTE FORCE

    For every category and all items in general, create a linked list of the products. Add, splice, and remove products from each linked list as necessary.

    IMPROVED

    Recognize that duplication of each list is unnecessary, since the items are the same.

    Create a hash table that maps a product ID to a product model. Create a linked list for each category. Each node's data includes the position it is in, as well as a reference to the product ID in the hash table.

    REDO; NEED TO HANDLE SALES RANK
*/
