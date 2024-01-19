describe('Validar textos', () => {
  beforeEach(() => {
    cy.createUserCorp()
    cy.visit({
      url: 'http://localhost:3001',
      headers: { 'accept-language': 'pt' },
    })
    cy.get('[href="/profile/sign-up"]').click()
  })

  it('Validar cadastro de perfil incorporador', () => {
    cy.CriarUsuarioIncorporador()
  })
})
