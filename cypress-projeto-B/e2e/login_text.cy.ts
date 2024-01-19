describe('verificando textos', () => {
  beforeEach(() => {
    cy.visit({
      url: 'http://localhost:3000/auth/signin',
      headers: { 'accept-language': 'pt' },
    })
    cy.fecharCookie()
  })
  it('analisando textos', () => {
    cy.verificarElementosPaginaLogin()
  })
})
