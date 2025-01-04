class sharedActions {
    takeScreenShots() {
        cy.screenshot({ capture: "fullPage" })
        return this;
    }

}
export default sharedActions;