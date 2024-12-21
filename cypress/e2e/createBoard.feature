Feature: Create a Board on trello website


    Scenario:Create new board
        Given The user login to trello website
        When Clicks on Create button on navbar
        And Choose create board option
        And Types board name in board title field 
        And Clicks on Create button 
        Then The board will created successfuly 
