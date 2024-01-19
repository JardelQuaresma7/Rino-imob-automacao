describe('verificando textos', () => {
  beforeEach(() => {
    cy.visit({
      url: 'http://localhost:3000/auth/forgot-password',
      headers: { 'accept-language': 'pt' },
    })
    cy.fecharCookie()
  })

  it('analisando textos esqueci minha senha', () => {
    cy.verificarTextosPaginaEsqueciSenha()
  })
})
