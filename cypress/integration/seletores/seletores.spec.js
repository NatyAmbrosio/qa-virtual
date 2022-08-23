///<reference types="Cypress"/>
/// <reference types="cypress-xpath" />

describe('Seletores', () => {

    it('Campos de Texto', () => {
        cy.visit('http://automationpractice.com/index.php')

        cy.get('[name="search_query"]')
            .type('dresses')
            .type('{enter}')
    });

    it('Campos de Texto com xpath', () => {
        cy.visit('http://automationpractice.com/index.php')

        cy.xpath('//input[@name="search_query"]')
            .type('dresses')
            .type('{enter}')
    });

    it('Interagindo com buttons', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[name="submit_search"]').click()
    });

    it('Interagingo com links', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[title="Dresses"]')
            .last()
            .click()
    });

    it('Interagingo com checkbox', () => {
        cy.visit('http://automationpractice.com/index.php')

        cy.get('[title="Dresses"]')
            .last()
            .click()

        cy.get('[type="checkbox"]')
            .check(['1_1','2_1'])

        cy.get('.top-pagination-content > .compare-form')
    });

    it('Interagingo com select', () => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')

        cy.get('#id_contact').select('Webmaster')
    });
    
});