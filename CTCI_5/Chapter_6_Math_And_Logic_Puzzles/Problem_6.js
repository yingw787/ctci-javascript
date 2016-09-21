/*
    A bunch of people are living on an island, when a visitor comes with a strange order: all blue-eyed people must leave the island as soon as possible. There will be a flight out at 8PM every evening. Each person can see everyone else's eye color, but they do not know their own (nor is anyone allowed to tell them). Additionally, they do not know how many people have blue eyes, although they do know that at least one person does. How many days will it take the blue-eyed people to leave?
*/

// TODO: REVIEW
/*
    Need to make the decision based on what other people's eye color is.
    Assume that there is at least one blue-eyed person on the island.

    ASSUMING that there is ONLY ONE blue-eyed person on the island, he/she would see all non-blue-eyed people. He/she would then know that he/she was a blue-eyed person, and leave.

    ASSUMING that there are TWO blue-eyed people on the island, each one would see one blue-eyed person.

    // START OF BOOK SOLUTION
    Each one knows that if there was one blue-eyed person on the island, he/she would leave on the first night. Therefore, if the other blue-eyed person was still here, they would know that there are two blue-eyed people. They would leave together on the second night.

    Therefore if there were n blue-eyed people on the island, they would leave after n days.
*/
