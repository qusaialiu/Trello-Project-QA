class moveTemplateToAnyListActions {
    openBoardTemplate(boardUrl) {
        cy.visit(boardUrl)
        return this;
    }
    clickOnEditTemplateCardIcon() {
        cy.findByTestId("quick-card-editor-button").click({ force: true })
        return this;
    }
    clickOnMoveCardNavbarButton() {
        cy.findByTestId("quick-card-editor-move").click()
        return this;
    }
    clickOnMoveList() {
        cy.findByTestId("move-card-popover-select-list-destination").click()

        return this;
    }
    selectOnList() {
        cy.get(".rOJoKuMD3duvxf").eq(3).click()
    }
    clickOnMoveButton() {
        cy.wait(2000)
        cy.findByTestId("move-card-popover-move-button").click()
        return this;
    }

}
export default moveTemplateToAnyListActions;