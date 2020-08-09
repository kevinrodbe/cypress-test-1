
describe("Our Todo App Test Suite", () => {
  it("Visiting our app", () => {
    cy.visit("/")
    cy.get(".nav-wrapper").contains("Items Manager")
    cy.get("input[name='title']")
  })
})