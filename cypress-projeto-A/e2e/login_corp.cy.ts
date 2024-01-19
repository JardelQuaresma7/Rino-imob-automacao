describe('Validar login', () => {
  beforeEach(() => {
    cy.visit('/auth/signin', {
      headers: { 'accept-language': 'pt' },
    })
  })

  it('Testando login com credenciais validas', () => {
    const email = 'jardelquaresma7@gmail.com'
    const password = 'Sonecasfc77@'

    cy.get('#email').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.wait(7000)
    cy.url().should('eq', 'http://localhost:3001/dashboard')
  })

  it('Testando login com credenciais inválidas e mensagem de erro', () => {
    const email = 'usuario@invalido.com'
    const password = 'senhaerrada'

    cy.get('#email').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.get('.Toastify__toast-body > :nth-child(2)')
      .should('exist')
      .and('have.text', 'E-mail ou senha inválidos.')
  })

  it('Testando login com usuário cadastrado apenas como perfil investidor', () => {
    const email = 'jardel.lima@rinobox.com.br'
    const password = 'Sonecasfc77@'

    cy.get('#email').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.get('.Toastify__toast-body > :nth-child(2)')
      .should('exist')
      .and('have.text', 'E-mail ou senha inválidos.')
  })

  it('Testando enviar os campos vazios e exibindo as mensagens de erro', () => {
    cy.get('button[type="submit"]').click()
    cy.contains('E-mail é obrigatório').should(
      'have.text',
      'E-mail é obrigatório',
    )
    cy.contains('Senha é obrigatória').should(
      'have.text',
      'Senha é obrigatória',
    )
  })

  it('Testando escrever e-mail com formato inválido', () => {
    const password = 'senhaerrada'
    const email = 'usuarioinvalido'

    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.get('#email').type(email)
    cy.contains('Formato de e-mail inválido').should(
      'have.text',
      'Formato de e-mail inválido',
    )
  })

  it('Testando comportamento do show/hide password', () => {
    const password = 'senhaerrada'

    cy.get('input[name="password"]').type(password)
    cy.get('.absolute > img').click()
    cy.get('input[name="password"]').should('have.attr', 'type', 'text')
    cy.get('.absolute > img').click()
  })

  it('Testando redirecionamento para a página de cadastro', () => {
    cy.contains('Criar minha conta').click()
    cy.url().should('eq', 'http://localhost:3001/profile/sign-up')
  })

  it('Testando redirecionamento para a página de esqueci minha senha', () => {
    cy.get('.h-fit > :nth-child(2) > .text-xs').click()
    cy.url().should('eq', 'http://localhost:3001/auth/forgot-password')
  })

  it('Testando redirecionamento para a landing page', () => {
    cy.contains('Voltar para home').click()
    cy.url().should('eq', 'http://localhost:3001/')
  })
})
