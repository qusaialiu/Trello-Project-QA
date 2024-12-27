class sharedActions {
    takeScreenShots() {
        cy.screenshot({ capture: "fullPage" })
    }

}
export default sharedActions;