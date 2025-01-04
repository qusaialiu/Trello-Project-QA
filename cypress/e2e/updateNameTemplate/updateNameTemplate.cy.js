import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import updateNameTemplateActions from "../../pageObjects/updateNameTemplate/actions.cy";
import updateNameTemplateAssertions from "../../pageObjects/updateNameTemplate/assertions.cy";


const dataUtil = new dataUtils()
const updateNameTemplateAction = new updateNameTemplateActions()
const updateNameTemplateAssertion = new updateNameTemplateAssertions()
const boardName = "AutomationTestingTemplate"
const listName = "Cypress Template"
const cardName = "Cucumber Template"
const updateCard = "Manual Testing"
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
    updateNameTemplateAction.openBoardTemplate(boardUrl)
})

When("Click on edit card icon", () => {
    updateNameTemplateAction.clickOnEditTemplateCardIcon()
})
When("Clear name of template and types name of template", () => {
    updateNameTemplateAction.clearAndTypesTemplateCard(updateCard)
})
When("Click on Save Button", () => {
    updateNameTemplateAction.clickOnSaveButton()
})
Then("The card will be updated successfully", () => {
    updateNameTemplateAssertion.checkListIsContainCard(updateCard)
})
after(() => {
    cy.wait(4000)
    dataUtil.deleteBoard(boardId)

})