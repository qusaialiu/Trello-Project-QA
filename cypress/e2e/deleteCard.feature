Feature: Can Delete Existing Card

    Scenario: Validate that the user can delete card
        Given The user navigate to the board
        And Click on edit card icon
        And Click on open card button
        And Click on Archive Button
        And Click on Delete Button
        And Click on Delete navigate Button
        Then The card will be deleted successfully