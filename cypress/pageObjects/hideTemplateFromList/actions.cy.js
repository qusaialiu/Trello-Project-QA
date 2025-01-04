class hideTemplateFromListActions {
    openBoardTemplate(boardUrl) {
        cy.visit(boardUrl)
        return this;
    }
    clickOnEditTemplateCardIcon() {
        cy.findByTestId("quick-card-editor-button").click({ force: true })
        return this;
    }

    clickOnHideFormListButton() {
        cy.findByTestId("quick-card-editor-archive").click()
    }
}
export default hideTemplateFromListActions;