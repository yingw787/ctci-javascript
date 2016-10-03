/*
    We have the following method used in a chess game: boolean canMoveTo(int x, int y). THis method is part of the Piece class and returns whether or not the piece can move to position (x, y). Explain how you would test this method.
*/

/*
    There are different pieces within the chessboard:
    - Pawn
    - Bishop
    - Rook
    - Knight
    - King
    - Queen

    The expected result is whether a piece can or can not move to a particular square.

    Questions:
    - How does the Piece class differentiate between different pieces? Inheiritance? Composition? Instance variables?
    - How is the chessboard defined? Through a grid of numbers? Through a grid of objects? Through another type of coordinate system?
    - Do we have access to source code for either of the above? Are we a black-box or a white-box tester?
    - How do the pieces interact with each other?

    Methods of testing:
    - Check whether function throws an error or generates an exception when given wrong types
    - Check whether function throws an error or generates an exception when out of bounds inputs are given (-1, -1)
    - Check whether function works for all types of pieces
    - Check whether function works for both white and black pieces
    - Check whether function works with all types of interactions between pieces
    - BOOK SOLUTION: test for many white pieces and few black ones
    - BOOK SOLUTION: test for a full board
    - BOOK SOLUTION: test for many black pieces and few white ones
*/
