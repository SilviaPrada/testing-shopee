describe('empty spec', () => {
    it('passes', () => {
      describe('empty spec', () => {
        it('passes', () => {
          // Testing melakukan login siakad kemudian mencetak form kelengkapan
          cy.visit('http://siakad.polinema.ac.id/')
          cy.get('input[name="username"]').type('nim')
          cy.get('input[name="password"]').type('password')
          cy.get('button[class="btn btn-success uppercase"]').click()
          cy.contains('Cetak Form Pengambilan Kelengkapan').click()
        })
      })
    })
  })