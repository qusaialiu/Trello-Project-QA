class deleteCardAssertions {
    checkOnCardNotBeVisible() {
        cy.findByTestId("list-cards").should("not.be.visible")
    }
}
export default deleteCardAssertions