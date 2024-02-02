/// <reference types="cypress" />
import produtosPage from "../support/page-objects/produtos.page";

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        produtosPage.visitaUrl()
    });

    it('Deve selecionar um da lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });

    it('Deve adicionar um produto ao carrinho', () => {

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

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve buscar um produto com sucesso', () => {
        
    });

    it('Deve adicionar um produto ao carrinho', () => {
        
    });

})