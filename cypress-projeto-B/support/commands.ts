Cypress.Commands.add('verificarElementosPaginaLogin', () => {
  cy.contains('E-mail').should('be.visible')
  cy.contains('Senha').should('be.visible')
  cy.contains('Acessar Carteira').should('be.visible')
  cy.contains('Esqueceu sua senha?').should('be.visible')
  cy.contains('ENTRAR').should('be.visible')
  cy.contains('Criar minha conta').should('be.visible')
  cy.contains('Voltar para home').should('be.visible')
})

Cypress.Commands.add('verificarTextosPaginaEsqueciSenha', () => {
  cy.get('h1.mb-4.text-2xl.font-bold')
    .should('have.text', 'Esqueceu sua senha?')
    .and('be.visible')

  cy.get('[class="text-center"]')
    .should('exist')
    .contains(
      'Insira o e-mail de registro e clique no botão ENVIAR para receber o link de redefinição de senha.',
    )

  cy.get('.gap-12 > .flex > .mt-4')
    .should('exist')
    .and('have.text', 'E-mail de registro')

  cy.get('#email').should('have.attr', 'placeholder', 'seuemail@example.com')
  cy.get('.h-9').should('exist').and('have.text', 'ENVIAR')
  cy.get('a.mt-4.hover\\:underline').should('have.text', 'Cancelar')
  cy.get('a.underline').should('have.text', 'Voltar para home')
})

Cypress.Commands.add('verificarTextosPaginaRedefinirSenha', () => {
  cy.contains('Redefinir sua senha').should('be.visible')
  cy.contains('Senha').should('be.visible')
  cy.contains('Confirmar Senha').should('be.visible')
  cy.contains('Senha deve conter').should('be.visible')
  cy.contains('Mínimo de 8 caracteres').should('be.visible')
  cy.contains('1 letra maiúscula').should('be.visible')
  cy.contains('1 letra minúscula').should('be.visible')
  cy.contains('1 número').should('be.visible')
  cy.contains('1 caractere especial').should('be.visible')
  cy.contains('SALVAR').should('be.visible')
  cy.contains('Cancelar').should('be.visible')
  cy.contains('Voltar para home').should('be.visible')
})

Cypress.Commands.add('fecharCookie', () => {
  cy.get('#btn > .block').contains('ACEITAR').click()
})

Cypress.Commands.add(
  'login',
  (
    email = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    cy.session(
      [email, password],
      () => {
        cy.visit('/auth/signin', { headers: { 'accept-language': 'pt' } })
        cy.fecharCookie()

        cy.get('#email').type(email)
        cy.get('input[name="password"]').type(password, { log: false })
        cy.get('button[type="submit"]').click()
        cy.wait(1000)
        cy.setCookie('popupShown', 'true')
        cy.setCookie('cookieConsent', 'true')
      },
      { cacheAcrossSpecs: true },
    )
  },
)

Cypress.Commands.add('allocateRequest', () => {
  cy.intercept(
    'POST',
    'https://api.homol.imobcoin.com/backend/api/v1/enterprise/*/allocate',
  ).as('allocateRequest')
})

Cypress.Commands.add('getWallet', () => {
  cy.intercept(
    'GET',
    'https://api.homol.imobcoin.com/backend/api/v1/dashboard',
  ).as('getWallet')
})

Cypress.Commands.add('getEnterpriseBricks', () => {
  cy.intercept(
    'GET',
    'https://api.homol.imobcoin.com/backend/api/v1/*/bricksAllocated',
  ).as('getEnterpriseBricks')
})

Cypress.Commands.add('paymenteBricks', () => {
  cy.intercept(
    'POST',
    'https://api.homol.imobcoin.com/backend/api/v1/payment',
  ).as('paymenteBricks')
})

Cypress.Commands.add('forgotPassword', () => {
  cy.intercept(
    'POST',
    'https://api.homol.imobcoin.com/backend/api/v2/auth/forgot-password',
  ).as('forgotPassword')
})
