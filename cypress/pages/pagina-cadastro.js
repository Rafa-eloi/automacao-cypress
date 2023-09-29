const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro(){
        //acessar a página
        cy.visit('https://magento2-demo.magebit.com/');

        //clicar no link para ir a tela onde será criado uma nova conta
        cy.contains('a', 'Create an Account').click();
    }

    preencherFormulario(){
        //pega o nome dos elementos e preenche com um texto definido, só campos obrigatórios
        cy.get('input[id="firstname"]').type('Rafael');
        cy.get('input[id="lastname"]').type('Eloi');
        cy.get('input[id="email_address"]').type('rafa.eloi@hotmail.com');
        cy.get('input[id="password"]').type('Abcd1234');
        cy.get('input[id="password-confirmation"]').type('Abcd1234');
    }

    submeterCadastro(){
        //clica no botão para criar conta
        cy.contains('button', 'Create an Account').click();
    }
}

export default new Cadastro();
