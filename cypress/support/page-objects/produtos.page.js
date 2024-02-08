class ProdutosPage {

    visitaUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row')
            .contains(nomeProduto)
            .click()
    }

    addProdutoCart(tamanho, cor, qtd) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.button-variable-item-' + tamanho).click() //enjambre
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()

    }

    visitarProduto(nomeProduto) {
        //cy.visit(`produtos/${nomeProduto}`)
        //Interpolação é uma forma de concatenar usando crase/${varável}crase

        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }   

}

export default new ProdutosPage