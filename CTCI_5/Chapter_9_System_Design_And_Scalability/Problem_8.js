/*
    Design a system like Pastebin, where a user can enter a piece of text and get a randomly generated URL to access it.
*/

/*
    ASSUMPTIONS:
    - No limit on text pasting.
    - User does not like extremely long URLs.
    - No quotas.
    - No user accounts.
    - No timeouts. There can never be a collision between two URLs.
    - There is a different hash every single time, even for the same content.
    - Users create items at different times.

    Several things can identify a particular piece of user-created data:
    - IP address that it was created from
    - Time it was created
    - actual content

    In order to save the data, a hash of the IP address and the time it was created can be used in a key for a database, and the content stored as a value.

    One method to create a URL from this data then would be to create a hash of the IP address and the time it was created, and then add in a lossless compressed hash of the actual content. This would be attached to the URL of the actual site.

    When a given URL is written, the URL query parameters are parsed, the database is searched for the corresponding hash of IP address and time, and the resulting data returned.
*/

/*
    REDO WITH ASSUMPTIONS:
    - System has frontend in addition to API.
    - System gets heavy traffic.
    - Timeouts are allowed.
    - Traffic is not equally distributed.
    - Users should not be able to guess document URLs easily.
*/
