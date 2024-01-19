describe('verificando textos', () => {
  beforeEach(() => {
    cy.visit({
      url: 'http://localhost:3001/auth/forgot-password',
      headers: { 'accept-language': 'pt' },
    })
  })

  it('analisando textos esqueci minha senha', () => {
    cy.verificarTextosPaginaEsqueciSenha()
  })
})
