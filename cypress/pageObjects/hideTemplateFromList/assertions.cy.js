class hideTemplateFromListAssertions {
    checkOnCardHideFormList() {
        cy.findByTestId("list-cards").should("not.be.visible")
        return this;
    }

}
export default hideTemplateFromListAssertions;