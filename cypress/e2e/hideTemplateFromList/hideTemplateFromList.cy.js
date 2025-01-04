import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import hideTemplateFromListActions from "../../pageObjects/hideTemplateFromList/actions.cy";
import hideTemplateFromListAssertions from "../../pageObjects/hideTemplateFromList/assertions.cy";

const dataUtil = new dataUtils()
const hideTemplateFromListAction = new hideTemplateFromListActions()
const hideTemplateFromListAssertion = new hideTemplateFromListAssertions()
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
    hideTemplateFromListAction.openBoardTemplate(boardUrl)
})
When("Click on edit card icon", () => {
    hideTemplateFromListAction.clickOnEditTemplateCardIcon()
})
When("Click on Hide form list button", () => {
    hideTemplateFromListAction.clickOnHideFormListButton()
})
Then("The Card will be hided successfully", () => {
    hideTemplateFromListAssertion.checkOnCardHideFormList()
})
after(() => {
    cy.wait(4000)
    dataUtil.deleteBoard(boardId)

})