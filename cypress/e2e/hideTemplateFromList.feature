@RegressionTesting
Feature: Hide Template From List

    Scenario: Validate the user can hide template form list
        Given The user navigate to the board
        When Click on edit card icon
        And Click on Hide form list button
        Then The Card will be hided successfully