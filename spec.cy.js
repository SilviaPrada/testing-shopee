describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://shopee.co.id')
    cy.get('input[class="shopee-searchbar-input__input"]').type('sepatu')
    cy.get('button[class="btn btn-solid-primary btn--s btn--inline shopee-searchbar__search-button"]').click()
    cy.contains('Log In').click()
    cy.contains('Google').click()

    // Daftar
    cy.contains('Daftar').click()
    cy.get('input[class="pDzPRp"]').type('082135453366')
    cy.contains('Berikutnya').click()
    cy.contains('Kirim').click()  
  })
})