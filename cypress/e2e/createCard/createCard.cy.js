///<reference types ="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import createCardActions from "../../pageObjects/createCard/actions.cy";
import createCardAssertions from "../../pageObjects/createCard/assertions.cy";

const boardName = "QA-Testing"
const cardName = "Hello QA Automation"
let boardUrl, boardId;
const dataUtil = new dataUtils()
const createCardAction = new createCardActions()
const createCardAssertion = new createCardAssertions()

before(() => {
    dataUtil.createBoard(boardName).then((response) => {
        cy.log(response.body.url)
        boardUrl = response.body.url
        boardId = response.body.id
    })
    cy.loginTrello()
})

Given("The user navigate to the board", () => {
    createCardAction.openBoard(boardUrl)
})
When("Click on Add a card button", () => {
    createCardAction.clickOnAddCardButton()
})
When("Types card name in card title input field", () => {
    createCardAction.typesInCardNameInput(cardName)
})
When("Click on Add Card button", () => {
    createCardAction.clickOnAddCard()
})
Then("The card will be created successfully", () => {
    createCardAssertion.checkListIsContainCard(cardName)
})
after(() => {
    cy.wait(4000)
    dataUtil.deleteBoard(boardId)

})