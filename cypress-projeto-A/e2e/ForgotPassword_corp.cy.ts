describe('Esqueci minha senha', () => {
  beforeEach(() => {
    cy.forgotPassword()

    cy.visit('http://localhost:3001/auth/forgot-password', {
      headers: { 'accept-language': 'pt' },
    })
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
    const email = 'jardelquaresma7@gmail.com'

    cy.get('#email').type(email)
    cy.get('.h-9').click()
    cy.wait('@forgotPassword')
    cy.url().should('include', 'http://localhost:3001/auth/sign-in')
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible')
    cy.get('.Toastify__toast-body > :nth-child(2)')
      .contains('Você receberá um e-mail com instruções para resetar senha.')
      .should('exist')
  })
})

// it('Testando enviar e-mail cadastrado apenas com perfil investidor', () => {
//   cy.get('#email').type('jardel.lima@rinobox.com.br')
//   cy.get('.h-9').click()
//   cy.wait('@forgotPassword')
//   cy.url().should('include', 'http://localhost:3001/auth/sign-in')
//   cy.contains('E-mail não registrado.').should('exist')
// })

// it('Testando enviar e-mail com letras após o .com.br', () => {
//   cy.get('#email').type('jardelquaresma7@gmail.com.brndnshbdh')
//   cy.get('.h-9').click()
//   cy.wait('@forgotPassword')
//   cy.url().should('include', 'http://localhost:3001/auth/sign-in')
//   cy.contains('E-mail não registrado.').should('exist')
// })
