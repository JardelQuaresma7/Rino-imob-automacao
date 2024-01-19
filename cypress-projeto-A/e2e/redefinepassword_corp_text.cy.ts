describe('verificando textos da redefinição de senha', () => {
  beforeEach(() => {
    cy.visit({
      url: 'http://localhost:3001/auth/reset-password?cod=mala', // <== change this ever
      headers: { 'accept-language': 'pt' },
    })
  })
  it('verificando textos da redefinição de senha', () => {
    cy.verificarTextosPaginaRedefinirSenha()
  })
})
