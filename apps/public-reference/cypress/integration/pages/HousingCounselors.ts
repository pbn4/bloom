describe("Housing counselors page", function() {
  it("renders the provided list of counselors", function() {
    cy.visit("/housing-counselors")
    cy.contains("Housing Counselors")
    cy.get("article").should("have.length.of.at.least", 1)

    cy.get("article").then(val => {
      if (val.attr("data-counselor")) {
        cy.get("article").contains("Language Services: ")
      } else {
        cy.get("article").contains("None found")
      }
    })
  })
})
