class createCardTemplateAssertions {
    checkListTemplateIsContainCard(templateTitle) {
        cy.findByTestId("card-name").should("contain", templateTitle)
        return this;
    }
    checkTemplateCardvisible() {
        cy.findByTestId("badge-card-template").should("be.visible")
    }

}
export default createCardTemplateAssertions;