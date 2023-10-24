/// <reference types="cypress"/>

describe('LamelifTest', () => {
    it('20 Hesap Oluştruma', () => {
        for (let i = 3; i < 20; i++) {

        cy.visit('https://www.lamelif.com/')

       
        //uye ol 
        cy.get('.width-40 > .button').click({force:true})
        //uye e posta
      cy.get('#registerFormEmailAddressInput').type(`user${i}@example.com`)
        //uye parola
        cy.get('#registerFormPasswordInput').type('123456')
        //uye paorla tekrar
        cy.get('#registerFormConfirmPasswordInput').type('123456')
        //uye isim
        cy.get('#registerFormFirstnameInput').type('alli')
        //uye soyisim
        cy.get('#registerFormLastnameInput').type('al')
        //uye cinsiyet
        cy.get(':nth-child(1) > .form-inputgroup-element-input-container').click({force:true})
        //uyelik sözleşmesi
        cy.get('.form-element.no-padding-bottom > .form-element-input-container').click({force:true})
        //uye ol 
        cy.get('#registerButton').click({force:true})
        cy.get('.container > .colgroup > .column > .menu > :nth-child(6) > a').click({force: true})
        // çıkış onaylama
        cy.get('#modal > .colgroup > .column > .button').click({force: true})
     
        }
        
        })
    })
