///<reference types="Cypress"/>

describe('Contatos', () => {

    before(()=> {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
    })
    it('Bloquear enviar formulario com campos vazio', () => {
        cy.get('#submitMessage')
            .should('be.visible')
            .click();

        cy.get('.alert li')
            .should('contain.text', 'Invalid email address.');
        cy.title().should('equal', 'Contact us - My Store')
        
    });

    it('Bloquear enviar formulario com email inválido', () => {

        cy.get('p.form-group')
            .first()
            .should('not.have.class', 'form-error');

        cy.get('#id_contact').select('Webmaster')
        cy.get('#email').type('email.com');
        cy.get('#id_order').type('referencia');
        
        cy.get('p.form-group')
            .first()
            .should('have.class', 'form-error');

    });

    it('Enviar formulario com email válido', () => {

        cy.get('p.form-group').first()
            .should('not.have.class', 'form-ok');

        cy.get('#id_contact').select('Webmaster')
        cy.get('#email').clear().type('exemplo@email.com');
        cy.get('#id_order').clear().type('referencia');
        
        cy.get('p.form-group').first()
            .should('have.class', 'form-ok');
        cy.get('#message').type('mensagem');

        cy.get('#submitMessage').click();

        cy.get('p.alert').should('have.text','Your message has been successfully sent to our team.');

        
    });
});