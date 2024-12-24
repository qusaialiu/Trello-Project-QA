import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../pageObjects/createBoard/actions.cy";
import createBoardAsserstions from "../../pageObjects/createBoard/asserstions.cy";

const createBoardAction = new createBoardActions();
const createBoardAsserstion = new createBoardAsserstions();
const boardName = "FirstBoard";

Given("The user login to trello website", () => {
    cy.loginTrello()

})
When("Clicks on Create button on navbar", () => {
    createBoardAction.clickOnNavbarCreateButton()

})
When("Choose create board option", () => {
    createBoardAction.clickOnCreateBoardOption()
})
When("Types board name in board title field", () => {
    createBoardAction.typeInBoardTitleInputField(boardName)
})
When("Clicks on Create button", () => {
    createBoardAction.clickOnCreateButton()
})
Then("The board will created successfuly", () => {
    createBoardAsserstion.checkBoardNameIsContain(boardName)
})