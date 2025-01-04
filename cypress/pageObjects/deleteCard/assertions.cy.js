class deleteCardAssertions {
    checkOnCardNotBeVisible() {
        cy.findByTestId("list-cards").should("not.be.visible")
        return this;
    }
}
export default deleteCardAssertions