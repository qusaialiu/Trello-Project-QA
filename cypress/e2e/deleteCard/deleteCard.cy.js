import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/dataUtils.cy";
import deleteCardActions from "../../pageObjects/deleteCard/actions.cy";

const dataUtil = new dataUtils()
const boardName = "AutomationTesting"
const listName = "Cypress Cucumber"
const cardName = "Why learn cypress"
const deleteCardAction = new deleteCardActions()
let boardUrl, boardId, listId;

before(() => {

    dataUtil.createBoard(boardName).then((response) => {
        cy.log(response.body.url)
        boardUrl = response.body.url
        boardId = response.body.id

        dataUtil.createListBoard(boardId, listName).then((listResponse) => {

            listId = listResponse.body.id
            cy.log(listResponse.body.id)

            dataUtil.createOnCard(listId, cardName).then((cardResponse) => {

            })
        })



    })


    cy.loginTrello()

    Given("The user navigate to the board", () => {
        deleteCardAction.openBoard(boardUrl)
    })

    When("Click on edit card icon", () => {
        deleteCardAction.clickOnEditCardIcon()

    })

    When("Click on open card button", () => {
        deleteCardAction.ClickOnOpenCardButton()
    })

    When("Click on Archive Button", () => {
        deleteCardAction.clickOnArchiveButton()

    })

    When("Click on Delete Button", () => {
        deleteCardAction.clickOnDeleteButton()
    })

    When("Click on Delete navigate Button", () => {
        deleteCardAction.clickOnConfirmDeleteButton()
    })

    Then("The card will be deleted successfully", () => {

    })
})