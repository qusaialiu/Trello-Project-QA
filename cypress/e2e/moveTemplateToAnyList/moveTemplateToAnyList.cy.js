import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import moveTemplateToAnyListActions from "../../pageObjects/moveTemplateToAnyList/actions.cy";
import moveTemplateToAnyListAssertions from "../../pageObjects/moveTemplateToAnyList/assertions.cy";


const dataUtil = new dataUtils()
const moveTemplateToAnyListAction = new moveTemplateToAnyListActions()
const moveTemplateToAnyListAssertion = new moveTemplateToAnyListAssertions()
const boardName = "AutomationTestingTemplate"
const listName = "Cypress Template"
const cardName = "Cucumber Template"
const template = true
let boardUrl, boardId, listId;

before(() => {
    dataUtil.createBoardTemplate(boardName, template).then((response) => {
        boardUrl = response.body.url
        boardId = response.body.id

        dataUtil.createListBoard(boardId, listName).then((listResponse) => {

            listId = listResponse.body.id
            dataUtil.createOnTemplateCard(listId, cardName, template).then((cardResponse) => {

            })
        })
    })
    cy.loginTrello()
})
Given("The user navigate to the board", () => {
    moveTemplateToAnyListAction.openBoardTemplate(boardUrl)
})
When("Click on edit card icon", () => {
    moveTemplateToAnyListAction.clickOnEditTemplateCardIcon()
})
When("Click on move Navbar Button", () => {
    moveTemplateToAnyListAction.clickOnMoveCardNavbarButton()
})
When("Click on select list filed", () => {
    moveTemplateToAnyListAction.clickOnMoveList()

})
When("Select to move the template to any list", () => {
    moveTemplateToAnyListAction.selectOnList()

})
When("Click on move Button", () => {
    moveTemplateToAnyListAction.clickOnMoveButton()
})
Then("The card will be moved successfully", () => {
    moveTemplateToAnyListAssertion.checkOnMoveTempalteCard(cardName)
})
Then("The card will not be visible", () => {
    moveTemplateToAnyListAssertion.checkOnTemplateCardNotBeVisiable()
})
after(() => {
    cy.wait(4000)
    dataUtil.deleteBoard(boardId)

})