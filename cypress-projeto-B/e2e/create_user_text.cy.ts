describe('Validar textos no cadastro de usuário', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/auth/signup', {
      headers: { 'accept-language': 'pt' },
    })
    cy.fecharCookie()
  })
  it('Testando criação de usuário com dados validos', () => {
    cy.contains('Criar conta').should('have.text', 'Criar conta')
    cy.contains('Nome').should('have.text', 'Nome')
    cy.contains('E-mail').should('have.text', 'E-mail')
    cy.contains('Telefone (prefixo + número)').should(
      'have.text',
      'Telefone (prefixo + número)',
    )
    cy.contains('SALVAR').should('have.text', 'SALVAR')
    cy.contains('Ja tenho conta').should('have.text', 'Ja tenho conta')
    cy.contains('Voltar para home').should('have.text', 'Voltar para home')
  })
})
