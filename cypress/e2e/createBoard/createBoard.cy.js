import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../pageObjects/createBoard/actions.cy";

const createBoardAction = new createBoardActions();

Given("The user login to trello website", () => {
    cy.loginTrello()

})
When("Clicks on Create button on navbar", () => {
    createBoardAction.clickOnNavbarCreateButton()

})
When("Choose create board option", () => {

})
When("Types board name in board title field", () => {
    cy.findByTestId("header-create-board-button")
})
When("Clicks on Create button", () => {

})
Then("The board will created successfuly", () => {

})