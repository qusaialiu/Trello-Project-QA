@SmokeTesting
Feature: Update Name Of Template

    Scenario: Validate user can update name of template
        Given The user navigate to the board
        When Click on edit card icon
        And Clear name of template and types name of template
        And Click on Save Button
        Then The card will be updated successfully