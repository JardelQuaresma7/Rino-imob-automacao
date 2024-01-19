describe('Esqueci minha senha', () => {
  beforeEach(() => {
    cy.forgotPassword()

    cy.visit('http://localhost:3000/auth/forgot-password', {
      headers: { 'accept-language': 'pt' },
    })
    cy.fecharCookie()
  })

  it('Testando enviar os campos vazios e exibindo as mensagens de erro', () => {
    cy.get('.h-9').click()
    cy.contains('E-mail é obrigatório').should(
      'have.text',
      'E-mail é obrigatório',
    )
  })

  it('Testando enviar e-mail não existente na base de dados', () => {
    const email = 'jardel.lima@rinoboxx.com.br'

    cy.get('#email').type(email)
    cy.get('.h-9').click()
    cy.contains('E-mail não registrado.').should('exist')
  })

  it('Testando enviar e-mail com formato válido', () => {
    const email = 'jardel.lima@rinobox.com.br'

    cy.get('#email').type(email)
    cy.get('.h-9').click()
    cy.wait('@forgotPassword')
    cy.url().should('include', 'http://localhost:3000/auth/signin')
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible')
    cy.get('.Toastify__toast-body > :nth-child(2)')
      .contains('Você receberá um e-mail com instruções para resetar senha.')
      .should('exist')
  })
})
