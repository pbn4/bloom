describe("applications/review/terms", function () {
  function submitApplication() {
    cy.get("button").contains("Submit").click()
  }

  beforeEach(() => {
    cy.loadConfig()
    cy.visit("/applications/review/terms")
  })

  it("Should render form", function () {
    cy.get("form").should("be.visible")
    cy.location("pathname").should("include", "applications/review/terms")
  })

  it("Should display initial form errors", function () {
    submitApplication()
    cy.getByID("agree-error").should("be.visible").and("not.to.be.empty")
  })

  it("Should redirect to the next step", function () {
    cy.getByID("agree").check()

    submitApplication()

    cy.checkErrorAlert("not.exist")
    cy.checkErrorMessages("not.exist")

    cy.location("pathname").should("include", "applications/review/confirmation")

    cy.getByID("confirmationId").should("be.visible").and("not.be.empty")
  })
})
