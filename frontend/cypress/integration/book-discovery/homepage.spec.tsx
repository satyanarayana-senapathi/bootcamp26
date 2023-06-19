/// <reference types="cypress" />

import { Dependencies } from "../../books/bookDiscovery/BookDiscoveryDependency";

context("Home page",()=>{
    const dependency = new Dependencies();
    describe("render the Home page",()=>{
        beforeEach(()=>{
            cy.visit("/");
        });
       it("renders header logo",()=>{ 
            dependency.visitImage("logo");
        });
        it("renders logo text",()=>{
            cy.get('[data-cy=logo-text]').should('have.text',"Z-Athena");
        });
        it("render on click home button in header",()=>{
            cy.get('[data-cy=home-button]').should('have.text',"Home");
            cy.get('[data-cy=home-button]').click().url().should("include","/");
        })
        it("on click explore button in header",()=>{
            cy.get('[data-cy=explore-button]').should('have.text',"Explore");
            cy.get('[data-cy=explore-button]').click().get('[data-cy=explore-menu]').should('exist');
        })
        it("on click my library in header",()=>{
            cy.get('[data-cy=my-library-button]').should('have.text',"My Library");
            cy.get('[data-cy=my-library-button]').click().url().should("include","/myLibrary");
        })
        it("on book search input header",()=>{
            cy.get('[data-cy=search-result]').type("Soumya");
            cy.get('[data-cy=see-more-button]').click().url().location().should((loc)=>{
                expect(loc.search).to.eq(
                    '?totalResult=4&value=Soumya'
                  )
                expect(loc.pathname).to.eq('/result');  
            });
        })
        it("render notification icon and avatar",()=>{
            dependency.visitImage("notification-icon");
            dependency.visitImage("avatar");
    
        })
        it("render body context",()=>{
            cy.get('[data-cy=heading]').should('have.text','Personalized Learning Journeys');
            cy.get('[data-cy=sub-text]').should('have.text','Learning journeys mapped and recommended based on your grade, learning need and speed.');
            cy.get('[data-cy=start-journey-button]').should('exist');
            cy.get('[data-cy=start-journey-button]').should('have.text','Start your Journey');
            dependency.visitImage("empty-state-image");
        })
        
    });
})
