class updateNameTemplateAssertions {
    checkListIsContainCard(updateCard) {
        cy.findByTestId("card-name").should("contain", updateCard)
        return this;
    }
}
export default updateNameTemplateAssertions;