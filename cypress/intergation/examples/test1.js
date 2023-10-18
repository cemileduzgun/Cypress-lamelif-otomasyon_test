///<reference types="cypress"/>

describe('LamelifTest1', () => {
    it('testcase2', () => {
        //siteye giriş
      cy.visit('https://www.lamelif.com/')
      
      //giriş yap butonu
      cy.get('div.headerTop:nth-child(2) div.wrapper.no-padding-top.no-padding-bottom.no-margin.headerTopMiddle:nth-child(3) div.container.width-wide.headerBottom-container:nth-child(1) div.colgroup.valign-middle div.column.width-20:nth-child(3) div.user-navigation-container.no-price ul.user-navigation li.login-register-button-container:nth-child(1) div.login-container div.login-panel-container:nth-child(2) a:nth-child(1) > div.account-button.login').click({force: true})
      //uye ol 
    cy.get('.width-40 > .button').click({force:true})
    //uye e posta
    cy.get('#registerFormEmailAddressInput').type('cemiledzgnn002@gmail.com')
    //uye parola
    cy.get('#registerFormPasswordInput').type('123456789')
    //uye paorla tekrar
    cy.get('#registerFormConfirmPasswordInput').type('123456789')
    //uye isim
    cy.get('#registerFormFirstnameInput').type('Cemile')
    //uye soyisim
    cy.get('#registerFormLastnameInput').type('düzgün')
    //uye cinsiyet
    cy.get(':nth-child(1) > .form-inputgroup-element-input-container').click({force:true})
    //uyelik sözleşmesi
    cy.get('.form-element.no-padding-bottom > .form-element-input-container').click({force:true})
    //uye ol 
    cy.get('#registerButton').click({force:true})

  })
})
