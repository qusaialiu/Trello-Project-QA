class moveTemplateToAnyListAssertions {
    checkOnTemplateCardNotBeVisiable() {
        cy.findByTestId("list-cards").first().should("not.be.visible")
        return this;
    }
    checkOnMoveTempalteCard(cardName) {
        cy.findByTestId("list-cards").should("contain", cardName)
        return this;
    }
}
export default moveTemplateToAnyListAssertions;