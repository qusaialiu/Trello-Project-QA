class createCardTemplateActions {
    openBoardTemplate(boardUrl) {
        cy.visit(boardUrl)
        return this;
    }
    clickOnTemplateCardIcon() {
        cy.findByTestId("TemplateCardIcon").first().click()
        return this;
    }
    clickOnCreateNewTemplateCardButton() {
        cy.findByTestId("create-new-template-card-button").click()
        return this;
    }
    typeInTemplateCardInput(templateTitle) {
        cy.findByTestId("create-template-card-composer").type(templateTitle)
        return this;
    }
    clickOnAddTemplateButton() {
        cy.findByTestId("new-template-card-submit-button").click()
        return this;
    }

    clickOnCloseIcon() {
        cy.findByTestId("CloseIcon").first().click()
        return this;
    }

}
export default createCardTemplateActions;