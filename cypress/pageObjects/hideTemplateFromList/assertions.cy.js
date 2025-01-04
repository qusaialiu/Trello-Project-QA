class hideTemplateFromListAssertions {
    checkOnCardHideFormList() {
        cy.findByTestId("list-cards").should("not.be.visible")
    }

}
export default hideTemplateFromListAssertions;