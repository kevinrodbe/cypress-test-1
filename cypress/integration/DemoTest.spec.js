describe("Our Todo App Test Suite", () => {
  it("Visiting our app", () => {
    cy.visit("/");
    cy.get(".nav-wrapper").contains("Items Manager");
  });

  it("Type title and description and add todo", () => {
    cy.visit("/");
    cy.get("input[name='title']").type("Lunch")
    cy.get("input[name='description']").type("Eating lunch at 1")
    cy.get('input[type="submit"]').click()
    cy.get("ul.collection > li").eq(1).find("strong").should("contain", "Lunch")
  });

  it.only("delete todo", () => {
    cy.visit("/");
    cy.get("ul.collection > li").eq(1).find("a").click()
    cy.get("ul.collection > li").eq(1).find("form").find('button[class="btn red"]').click()
    cy.get("ul.collection > li").eq(1).should("not.exist")
  });
});
