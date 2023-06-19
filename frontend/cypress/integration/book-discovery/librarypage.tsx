/// <reference types="cypress" />
import { Dependencies } from "../../books/bookDiscovery/BookDiscoveryDependency";
context("My library page",()=>{
    const dependency = new Dependencies();
    describe("render my library page",()=>{
        beforeEach(()=>{
            cy.visit("/");
            cy.get('[data-cy="my-library-button"] > .MuiButton-root > [data-testid="testTypo"]').click();
        });
        it("render banner from my library page",()=>{
            dependency.visitImage("banner");
            cy.get('[data-cy="discover-button"]').should('have.text',"Discover");
            cy.get('[data-cy="discover-button"]').click();
        });
        it("renders task cards",()=>{
            cy.get('[data-cy=task-card-1-title]').should("have.text","Currently Reading");
            dependency.visitImage("task-card-1-image");
            cy.get('[data-cy=task-card-2-title]').should("have.text","Books To Read");
            dependency.visitImage("task-card-2-image");
            cy.get('[data-cy=task-card-3-title]').should("have.text","Books Read");
            dependency.visitImage("task-card-3-image");
            cy.get('[data-cy=task-card-4-title]').should("have.text","Target Per Year");
            dependency.visitImage("task-card-4-image");
        })
        it("renders currently reading",()=>{
            cy.get('[data-cy=currently-reading-book-card-1]').click().url().should("include","http://localhost:3000/bookDetailView/1");
        })
    })
})