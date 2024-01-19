describe('Validar cadastro de usuário', () => {
  beforeEach(() => {
    cy.intercept(
      'PUT',
      'https://api.homol.imobcoin.com/backend/api/v2/profile',
    ).as('createProfile')

    cy.visit('http://localhost:3000/auth/signup', {
      headers: { 'accept-language': 'pt' },
    })
    cy.fecharCookie()
  })
  it('Testando criação de usuário com dados validos', () => {
    const nome = 'Rapidinho Testando'
    // generate random email
    const email = `rapidinho${Math.random()}@gmail.com`

    const prefixo = '55'
    const telefone = '11999999999'

    cy.get('input[name="name"]').type(nome)
    cy.get('#email').type(email)
    cy.get('#ddi').type(prefixo)
    cy.get('#phone').type(telefone)
    cy.get('.h-9').click()
    cy.wait('@createProfile')
    cy.url().should('eq', 'http://localhost:3000/auth/signin')
  })

  it('Testando enviar os campos vazios e exibindo as mensagens de erro', () => {
    cy.get('.h-9').click()
    cy.contains('Nome é obrigatório').should('have.text', 'Nome é obrigatório')
    cy.contains('E-mail é obrigatório').should(
      'have.text',
      'E-mail é obrigatório',
    )
    cy.contains('Mínimo de 1 dígito').should('have.text', 'Mínimo de 1 dígito')
    cy.contains('Mínimo de 10 dígitos').should(
      'have.text',
      'Mínimo de 10 dígitos',
    )
  })

  it('Testando inserir um e-mail de usuário já cadastrado', () => {
    const nome = 'automatizador mestre'
    const email = 'jardel.lima@rinobox.com.br'
    const prefixo = '55'
    const telefone = '11999999999'

    cy.get('input[name="name"]').type(nome)
    cy.get('#email').type(email)
    cy.get('#ddi').type(prefixo)
    cy.get('#phone').type(telefone)
    cy.get('.h-9').click()
    cy.wait('@createProfile')
    cy.get('.Toastify__toast-body > :nth-child(2)')
      .should('exist')
      .and('have.text', 'Este e-mail já está sendo utilizado.')
  })

  it('Testando escrever e-mail com formato inválido', () => {
    const nome = 'automatizador mestre'
    const email = 'usuarioinvalido'
    const prefixo = '55'
    const telefone = '11999999999'

    cy.get('input[name="name"]').type(nome)
    cy.get('#email').type(email)
    cy.get('#ddi').type(prefixo)
    cy.get('#phone').type(telefone)
    cy.get('.h-9').click()
    cy.contains('Formato de e-mail inválido').should(
      'have.text',
      'Formato de e-mail inválido',
    )
  })

  it('Testando escrever telefone com formato inválido', () => {
    const nome = 'automatizador mestre'
    const email = 'jardelquaresma7@gmaiiil.com'
    const prefixo = '55'
    const telefone = 'jardel+-*/'

    cy.get('input[name="name"]').type(nome)
    cy.get('#email').type(email)
    cy.get('#ddi').type(prefixo)
    cy.get('#phone').type(telefone)
    cy.get('.h-9').click()
    cy.contains('Mínimo de 10 dígitos').should(
      'have.text',
      'Mínimo de 10 dígitos',
    )
  })

  it('Testando escrever ddd com formato inválido', () => {
    const nome = 'automatizador mestre'
    const email = 'jardelquaresma7@gmaiiil.com'
    const prefixo = 'j+-'
    const telefone = '1111111111'

    cy.get('input[name="name"]').type(nome)
    cy.get('#email').type(email)
    cy.get('#ddi').type(prefixo)
    cy.get('#phone').type(telefone)
    cy.get('.h-9').click()
    cy.contains('Mínimo de 1 dígito').should('have.text', 'Mínimo de 1 dígito')
  })

  it('Testando inserir nome com apenas 1 caracter', () => {
    const nome = 'a'

    cy.get('input[name="name"]').type('a')
    cy.get('.h-9').click()
    cy.contains('Mínimo de 2 caracteres').should(
      'have.text',
      'Mínimo de 2 caracteres',
    )
  })

  it('Testando redirecionamento para a página de login', () => {
    cy.get('a[href="/auth/signin"]').click()
    cy.url().should('eq', 'http://localhost:3000/auth/signin')
  })

  it('Testando redirecionamento para home', () => {
    cy.contains('Voltar para home').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
