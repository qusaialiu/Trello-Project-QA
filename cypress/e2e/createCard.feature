Feature: Create Card on Trello Website
    Scenario: Validate that the user can create a new card
        Given The user navigate to the board
        When Click on Add a card button
        And Types card name in card title input field
        And Click on Add Card button
        Then The card will be created successfully