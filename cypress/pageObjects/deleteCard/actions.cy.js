class deleteCardActions {
    openBoard(boardUrl) {
        cy.visit(boardUrl)
        return this;
    }
    clickOnEditCardIcon() {
        cy.findByTestId("quick-card-editor-button").click({ force: true })
        return this;
    }
    ClickOnOpenCardButton() {
        cy.findByTestId("quick-card-editor-open-card").click()
        return this;
    }
    clickOnArchiveButton() {
        cy.findByTestId("card-back-archive-button").click()
        return this;
    }
    clickOnDeleteButton() {
        cy.findByTestId("card-back-delete-card-button").click()
        return this;
    }
    clickOnConfirmDeleteButton() {
        cy.findByTestId("popover-confirm-button").click()
        return this;
    }


}
export default deleteCardActions;