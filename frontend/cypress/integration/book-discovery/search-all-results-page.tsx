/// <reference types="cypress" />

context("Search All Results Page", () => {
  describe("render the Search All Results page", () => {
    beforeEach(() => {
      cy.visit("/result?totalResult=4&value=Soumya");
    });
    it("renders searched word", () => {
      cy.get("[data-cy=searched-text]").should(
        "have.text",
        "Search Results for Soumya"
      );
    });
    it("renders searched results and pages", () => {
      cy.get("[data-cy=pages-and-results-returned]").should(
        "have.text",
        "1-1page of 4 result"
      );
    });
    it("clicks on pagination button", () => {
      cy.get(":nth-child(2) > .MuiButtonBase-root")?.click();
    });

    it("search with different input text", function () {
      cy.get(".MuiInput-input").clear();
      cy.get(".MuiInput-input").type("s");
      cy.get('[data-cy="see-more-button"] > [data-testid="testTypo"]').click();
    });

    it("search with empty input text", function () {
      cy.get(".MuiInput-input").clear();
      cy.get(".MuiInput-input").type("pc");
      cy.get(
        '.MuiInputAdornment-positionEnd > [data-testid="testImage"]'
      ).click();
    });
    it("click on resultant search books", () => {
      cy.get("[data-cy=explore-book-1]")?.click();
    });
  });
});
