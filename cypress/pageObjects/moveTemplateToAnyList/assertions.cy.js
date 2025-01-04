class moveTemplateToAnyListAssertions {
    checkOnTemplateCardNotBeVisiable() {
        cy.findByTestId("list-cards").first().should("not.be.visible")
        return this;
    }
    checkOnMoveTempalteCard(cardName) {
        cy.findByTestId("list-cards").should("contain", cardName)

    }
}
export default moveTemplateToAnyListAssertions;