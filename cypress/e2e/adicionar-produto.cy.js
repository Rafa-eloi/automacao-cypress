describe('Adicionar produto ao carrinho de compra', () => {

    beforeEach(() => {
        //acessar a página
        cy.visit('https://magento2-demo.magebit.com/');

        //clicar no link para ir a tela onde será feito o login
        cy.contains('a', 'Sign In').click();

        //chama a função login de dentro do arquivo commands
        cy.login('rafa.eloi@hotmail.com', 'Abcd1234');
    })

    it('Adiconar um produto ao carrinho de compra', () => {

        //clicar no link para ir a tela onde contem produtos masculinos
        cy.contains('span', 'Men').click();

        //clicar no link para escolher uma camiseta



        //cy.xpath('//*[@id="maincontent"]/div[4]/div[2]/div/div/ul[1]/li[3]/a').click();

        //cy.contains('a', 'Tees').click();

        cy.contains('ul[class="items"]', 'a', 'Tees').click()

        
        
        //FALTANDO ESSA PARTE PARA ADICIONAR PRODUTO
     
    

        //cy.get('button[id="category"]').click()

        cy.contains('div[class="products wrapper grid products-grid"]', 'div[id="product-item-info_486"]').click();

       // cy.contains('span[class="product-image-container product-image-container-486"]', 'a', 'Ryker LumaTech&trade; Tee (Crew-neck)').click();

        //clicar para escolher o tamanho
        cy.get('[id="option-label-size-157-item-173"]').click();

        //clicar para escolher a cor
        cy.get('[id="option-label-color-93-item-49"]').click();

        //clicar no botão de adicionar ao carrinho
        cy.contains('a', 'Add to Cart').click();

    })
})
