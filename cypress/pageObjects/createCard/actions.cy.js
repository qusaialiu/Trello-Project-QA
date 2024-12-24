class createCardActions {
    openBoard(boardUrl) {
        cy.visit(boardUrl)
        return this;
    }
    clickOnAddCardButton() {
        cy.findByTestId("list-add-card-button").first().click()
        return this;
    }
    typesInCardNameInput(cardName) {
        cy.findByTestId("list-card-composer-textarea").type(cardName)
        return this;
    }
    clickOnAddCard() {
        cy.findByTestId("list-card-composer-add-card-button").click()
    }
}
export default createCardActions;