///<reference types="Cypress"/>


/**
 * tenho a pre-condição
 * executo a ação
 * valido o resultado
 */

describe('Asserção', () => {
    it('igualdade', () => {

        let a = 1;

        expect(a).equal(1);
        expect(a, 'O resultado deve ser 1').equal(1)
        expect(a).to.be.equal(1)
        expect(a).not.equal('b')
        
    });

    it('booleano',()=> {
        const a = true;
        const b = null;
        let c;

        expect(a).to.be.true
        expect(b).to.be.null
        expect(c).to.be.undefined
    })

    it('objetos', () => {
        const obj = {
            a: 1,
            b: 2
        }

        const obj_b = {
            a: 1,
            b: 2
        }

        expect(obj).equal(obj)
        expect(obj).eq(obj)
        expect(obj).deep.equal(obj_b)
        expect(obj).to.have.property('b')
        expect(obj).include({a: 1})
    });

    it('Arrays', () => {
        const arr = [1,2,3,4]

        expect(arr).to.have.members([1,2,3,4])
        expect(arr).to.include.members([1,2])
        expect(arr).to.not.empty
        expect([]).to.be.empty

    });

    it('tipos de dados', () => {
        const num = 1;
        const text = 'texto'

        expect(num).to.be.a('number')
        expect(text).to.be.a('string')
        expect({}).to.be.an('object')
        expect([]).to.be.an('array')

    });

    it('numeros', () => {
        const number = 4;

        expect(number).to.be.equal(4)
        expect(number).to.be.above(3)
        expect(number).to.be.below(7)
    });


    it.only('Asserção com should', () => {
        cy.visit('http://automationpractice.com/index.php')

        cy.get('[title="Dresses"]')
            .last()
            .click()

        cy.get('[type="checkbox"]')
            .should('have.length', 19)
            .check(['1_1','2_1'])

        cy.get('.top-pagination-content > .compare-form')
    });
});