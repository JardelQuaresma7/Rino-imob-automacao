describe('verificando textos da redefinição de senha', () => {
  beforeEach(() => {
    cy.visit({
      url: 'http://imobcoin.homol.rinobox.com.br:3001/auth/reset-password?cod=ig2ypAo3S52YOUK6Sa9BgXjREJdpud6ySRpNCqAUoQByi4pnlcUsyvvUsKcizCJJH8RZFcK1CkAq54Tj6Va5osQC2rzxnStCipS9qzFoi9pmhsSLYwIMlmFSsaZVh0TQhj89xWt6cMVuH5Btr2wON2x5kC47v5MMtWWX1DHKJrFNXWTiYQU2RbmIREqNUJ6mD8NDA0UZ', // <== sempre trocar token
      headers: { 'accept-language': 'pt' },
    })
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

  it('Testando redefinir senha com credenciais válidas', () => {
    const senha = 'Sonecasfc77@'

    cy.get('#password').type(senha).should('have.value', senha)
    cy.get('#confirmPassword').type(senha).should('have.value', senha)
    cy.get('.h-9').click()
    cy.contains('Sua senha foi alterada com sucesso!')
  })
})
