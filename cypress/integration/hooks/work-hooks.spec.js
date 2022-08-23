///<reference types="Cypress"/>

describe('Hooks', () => {

    /**
     * Executar Antes de todos os testes
     * Antes de cada teste
     * Depois de todos os testes
     * Depois de cada teste
     */

    before(()=> {
        cy.log('antes de todos os testes')
    })

    beforeEach(()=> {
        cy.visit('http://automationpractice.com/index.php')
    })

    it.skip('Buscar vestido e selecionar tamanho', () => {
        

        cy.get('[title="Dresses"]')
            .last()
            .click()

        cy.get('[type="checkbox"]')
            .should('have.length', 19)
            .check(['1_1','2_1'])

        cy.get('.top-pagination-content > .compare-form')
    });

    it('Buscar vestido', () => {

        cy.get('[name="search_query"]')
            .type('dresses')
            .type('{enter}')
    });

    it.skip('Caso de teste pendente', () => {
        
    });

    it('Caso de teste ignorado', () => {
        cy.log('ignorado')
    });

    after(()=> {
        cy.log('Depois de todos os testes');
    })

    afterEach(()=> {
        cy.log('Depois de cada teste');
    })
});