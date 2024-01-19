describe('verificando textos', () => {
  beforeEach(() => {
    cy.visit({
      url: 'http://localhost:3001/auth/sign-in',
      headers: { 'accept-language': 'pt' },
    })
  })
  it('analisando textos', () => {
    cy.verificarElementosPaginaLogin()
  })
})


cy.visit