import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import createCardTemplateActions from "../../pageObjects/createCardTemplate/actions.cy";
import createCardTemplateAssertions from "../../pageObjects/createCardTemplate/assertions.cy";

const createCardTemplateAction = new createCardTemplateActions()
const createCardTemplateAssertion = new createCardTemplateAssertions()
const dataUtil = new dataUtils()
const boardName = "AutomationTestingTemplate"
const templateTitle = "Cypress Template"
const template = true
let boardUrl, boardId;
before(() => {
    dataUtil.createBoardTemplate(boardName, template).then((response) => {
        boardUrl = response.body.url
        boardId = response.body.id
    })
    cy.loginTrello()
})


Given("The user navigate to the board", () => {
    createCardTemplateAction.openBoardTemplate(boardUrl)
})
When("Click on create from template icons", () => {
    createCardTemplateAction.clickOnTemplateCardIcon()
})
When("Click on Create a new Template Button", () => {
    createCardTemplateAction.clickOnCreateNewTemplateCardButton()
})
When("Types card template in template title input field", () => {
    createCardTemplateAction.typeInTemplateCardInput(templateTitle)
})
When("Click on Add Button", () => {
    createCardTemplateAction.clickOnAddTemplateButton()
})

When("Click on close icon in open Card navBar", () => {
    cy.wait(3000)
    createCardTemplateAction.clickOnCloseIcon()
})
Then("The card template will be created successfully", () => {
    createCardTemplateAssertion.checkListTemplateIsContainCard(templateTitle)
})
Then("The template should be visible", () => {
    createCardTemplateAssertion.checkTemplateCardvisible()
})
after(() => {
    cy.wait(4000)
    dataUtil.deleteBoard(boardId)

})