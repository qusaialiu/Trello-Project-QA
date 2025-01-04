@SmokeTesting
Feature: Create New Card Template

    Scenario: Validate User Can Create New Card Template
        Given The user navigate to the board
        When Click on create from template icons
        And Click on Create a new Template Button
        And Types card template in template title input field
        And Click on Add Button
        And Click on close icon in open Card navBar
        Then The card template will be created successfully
        And The template should be visible