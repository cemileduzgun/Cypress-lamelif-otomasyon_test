///<reference  types="cypress"/>
describe ('deneme ', () =>{
    it('testcase2', () => {
        //siteye giriş
      cy.visit('https://www.lamelif.com/')

.then(() => {
    cy.log('İşlem tamamlandı.');
  });
})
})