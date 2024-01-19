describe('Validar textos', () => {
  beforeEach(() => {
    cy.visit({
      url: 'http://localhost:3001',
      headers: { 'accept-language': 'pt' },
    })
    cy.get('[href="/profile/sign-up"]').click()
  })

  it('Validar textos página de cadastro', () => {
    cy.verificarTextosPaginaCriarConta()
  })
})
