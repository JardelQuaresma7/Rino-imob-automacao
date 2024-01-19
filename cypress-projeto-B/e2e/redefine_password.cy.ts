describe('verificando textos da redefinição de senha', () => {
  beforeEach(() => {
    cy.visit({
      url: 'http://localhost:3000/auth/reset-password?cod=fndIlLa7vvQ9O8mKSZRJ8LvXSk7m3ZisuBauTecnQdqp6JCNQHWXaXww2nkVBZboQPvf0ojJxeLYBUC8Cuzjxh3ESCZOwwsvXCLLg5MyxBEMraBkjNBQKyTUNvYeefODfQIZ8G39H6XQxqoFCGeYvLspHIWi15NboE7VoaFyH6NrTeiiTUOe1wT0RtCS2y9NIImXOYxN', // <== sempre trocar token
      headers: { 'accept-language': 'pt' },
    })
    cy.fecharCookie()
  })

  it('Testando redefinir senha com credenciais válidas', () => {
    const senha = 'Sonecasfc77@'

    cy.get('#password').type(senha).should('have.value', senha)
    cy.get('#confirmPassword').type(senha).should('have.value', senha)
    cy.get('.h-9').click()
    cy.contains('Sua senha foi alterada com sucesso!')
  })

  it('Testando digitar no input Senha', () => {
    const senha = 'MinhaSenha123@'

    cy.get('#password').type(senha).should('have.value', senha)
  })
  it('Testando digitar no input Confirmar Senha', () => {
    const senha = 'Sonecasfc77@'

    cy.get('#confirmPassword').type(senha).should('have.value', senha)
  })

  it('Testando enviar senha sem atender os requisitos', () => {
    cy.get('#password').type('123').should('have.value', '123')
    cy.get('#confirmPassword').type('123').should('have.value', '123')
    cy.get('.h-9').click()
  })

  it('testando enviar senha sem coincidir e verificando a msg do input', () => {
    cy.get('#password')
      .type('MinhaSenha123@')
      .should('have.value', 'MinhaSenha123@')
    cy.get('#confirmPassword')
      .type('MinhaSenha123')
      .should('have.value', 'MinhaSenha123')
    cy.get('.h-9').click()
    cy.contains('A senha deve ser forte e atender aos requisitos')
  })

  it('Testando show/hide password', () => {
    cy.get('#password').type('MinhaSenha123@')
    cy.get(':nth-child(1) > .relative > .absolute > img').click().click()
    cy.get('#confirmPassword').type('MinhaSenha123@')
    cy.get(':nth-child(2) > .relative > .absolute > img').click().click()
  })
})
