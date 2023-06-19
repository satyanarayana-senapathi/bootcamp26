/// <reference types="Cypress" />
export class Dependencies{
    visitImage(image:string){
        cy.get(`[data-cy=${image}]`).should('be.visible');
    }
}