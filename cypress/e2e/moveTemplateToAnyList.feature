@RegressionTesting
Feature: Move Template to Any List


    Scenario: Validate user can Move Template to any list
        Given The user navigate to the board
        When Click on edit card icon
        And Click on move Navbar Button
        And Click on select list filed
        And Select to move the template to any list
        And Click on move Button
        Then The card will be moved successfully
        And The card will not be visible