/// <reference types="cypress" />

context("Book Details View page", () => {
  describe("render the book details page", () => {
    beforeEach(() => {
      cy.visit("/bookDetailView/1");
    });
    it("render book data", () => {
      cy.get("[data-cy=book-detail-title]").should("have.text", "English");
      cy.get("[data-cy=book-detail-image]").should("be.visible");
      cy.get("[data-cy=book-detail-author]").should("have.text", "Veenayak");
      cy.get("[data-cy=book-detail-category]").should("have.text", "English");
      cy.get("[data-cy=book-detail-rating]").should("have.text", "4");
      cy.get("[data-cy=book-detail-total-rating]").should(
        "have.text",
        "(0 reviews)"
      );
      cy.get("[data-cy=book-detail-date]").should(
        "have.text",
        "Release Date: 2000-01-01"
      );
      cy.get("[data-cy=book-detail-language]").should(
        "have.text",
        "Language: English"
      );
      cy.get("[data-cy=book-detail-select]").should("have.text", "Finished");
      cy.get("[data-cy=book-detail-progress]").should(
        "have.text",
        "100 read / 100 pages"
      );
      cy.get("[data-cy=book-detail-description]").should(
        "have.text",
        "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how.By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks. With exercises in each "
      );
    });

    it("Update book status", () => {
      cy.get("[data-cy=book-detail-select]")
        .click()
        .get("[data-cy=book-detail-current]")
        .click()
        .should("have.text", "Reading");
      cy.get("[data-cy=book-detail-select]")
        .click()
        .get("[data-cy=book-detail-finished]")
        .click()
        .should("have.text", "Finished");
    });

    it("About author", () => {
      cy.get("[data-cy=about-author-heading]").should(
        "have.text",
        "About Author"
      );
      cy.get("[data-cy=about-author-name]").should("have.text", "Joe Pearson");
      cy.get("[data-cy=about-author-followers]").should(
        "have.text",
        "1,902 Followers"
      );
      cy.get("[data-cy=about-author-description]").should(
        "have.text",
        "Peter was the 2016 recipient of the American Chemical Society's Grady Stack Award for science journalism. Julio de Paula is Professor of Chemistry, Lewis & Clark College."
      );
      cy.get("[data-cy=about-author-books-heading]").should(
        "have.text",
        "Books by Joe pearson"
      );
      cy.get("[data-cy=about-author-button]").should("have.text", "Following");
    });

    it("Batchmates Read", () => {
      cy.get("[data-cy=batchmates-heading]").should(
        "have.text",
        "Your batchmates also read"
      );
    });
  });
});
