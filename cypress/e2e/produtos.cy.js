/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um da lista', () => {
        cy.get('[class="product-block grid"]')
            ///.first() Seleciona o primeiro item da lista
            ///.last() Seleciona o último item da lista
            ///.eq(3) É usado para escolher a posição específica de uma lista de 0 a 99999(0=1, 1=2, 2=3...)
            ///.contains('Ariel Roll Sleeve Sweatshirt') Busca um item pelo nome contido no elemento.
            .first()
            .click()

    });

    it.only('Deve adicionar um produto ao carrinho', () => {

        var quant = 5

        cy.get('[class="product-block grid"]')
            .first()
            .click()
        cy.get('.button-variable-item-XL')
            .click()
        cy.get('.button-variable-item-Red')
            .click()
        cy.get('.input-text')
            .clear()
            .type(quant)
        cy.get('.single_add_to_cart_button')
            .click()

        cy.get('.dropdown-toggle > .mini-cart-items')
            .should('contain', quant)
        cy.get('.woocommerce-message')
            .should('contain', quant + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

    });

})