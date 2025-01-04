class updateNameTemplateActions {
    openBoardTemplate(boardUrl) {
        cy.visit(boardUrl)
        return this;
    }
    clickOnEditTemplateCardIcon() {
        cy.findByTestId("quick-card-editor-button").click({ force: true })
        return this;
    }
    clearAndTypesTemplateCard(updateCard) {
        cy.findByTestId("quick-card-editor-card-title").clear().type(updateCard)
        return this;
    }
    clickOnSaveButton() {
        cy.get("[type=submit]").click()
        return this;
    }
}
export default updateNameTemplateActions;