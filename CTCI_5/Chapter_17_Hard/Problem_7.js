/*
    Each year, the government releases a list of the 10000 most common baby names and their frequencies (the number of babies with that name). THe only problem with this is that some names have multiple spellings. For example, "John" and "Jon" are essentially the same name but would be listed separately in the list. Given two lists, one of names/frequencies and the other of pairs of equivalent names, write an algorithm to print a new list of the true frequency of each name. Note that if John and Jon are synonyms, and Jon and Johnny are synonyms, then John and Johnny are synonyms. (It is both transitive and symmetric.) In the final list, any name can be used as the "real" name.

    EXAMPLE

    Input:

    Names: {
        'John': 15,
        'Jon': 12,
        'Chris': 13,
        'Kris': 4,
        'Christopher': 19,
    }
    Synonyms: [
        ['Jon', 'John'],
        ['John', 'Johnny'],
        ['Chris', 'Kris'],
        ['Chris', 'Christopher']
    ]

    Output:

    {
        'John': 27,
        'Kris': 36,
    }
*/

/*
    BRUTE FORCE SOLUTION

    Add all synonyms into a hash table.
    For each pair in synonyms,
    Check the hash table to see whether the first element in the pair is already present.
    If the first element is not present, create a new key with the name and the elements from the array as an array.
    If the first element is present, either as a key or within one of the array, append the latter element in the array.

    {
        'Jon': ['Jon', 'John', 'Johnny'],
        'Chris': ['Chris', 'Kris', 'Christopher'],
    }

    Then for each key, create a count that sums up all names present within the array, and add it to a results hash table.

    {
        'Jon': 27,
        'Chris': 36,
    }

    Return the results hash table.

    O(M * N) time, M is size of synonyms, N is size of names
    O(M) space, M is size of synonyms

    REDO O(M + N) time, O(N) space
*/
