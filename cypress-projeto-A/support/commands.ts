Cypress.Commands.add('verificarElementosPaginaLogin', () => {
  cy.contains('E-mail').should('be.visible')
  cy.contains('Senha').should('be.visible')
  cy.contains('Acessar Projetos').should('be.visible')
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

Cypress.Commands.add('verificarTextosPaginaCriarConta', () => {
  cy.contains('Nome da empresa').should('be.visible')
  cy.contains('Razão Social').should('be.visible')
  cy.contains('CNPJ').should('be.visible')
  cy.contains('CEP').should('be.visible')
  cy.contains('Estado').should('be.visible')
  cy.contains('Cidade').should('be.visible')
  cy.contains('Bairro').should('be.visible')
  cy.contains('Logradouro').should('be.visible')
  cy.contains('Número').should('be.visible')
  cy.contains('País').should('be.visible')
  cy.contains('Complemento').should('be.visible')
  cy.contains('Capital social').should('be.visible')
  cy.contains('Nome do responsável').should('be.visible')
  cy.contains('Telefone').should('be.visible')
  cy.contains('E-mail').should('be.visible')
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

Cypress.Commands.add('getWallet', () => {
  cy.intercept(
    'GET',
    'https://api.homol.imobcoin.com/backend/api/v1/dashboard',
  ).as('getWallet')
})

Cypress.Commands.add('forgotPassword', () => {
  cy.intercept(
    'POST',
    'https://api.homol.imobcoin.com/backend/api/v2/auth/forgot-password',
  ).as('forgotPassword')
})

Cypress.Commands.add('createUserCorp', () => {
  cy.intercept(
    'PUT',
    'https://api.homol.imobcoin.com/backend/api/v2/incorp/incorp',
  ).as('createUserCorp')
})

Cypress.Commands.add('CriarUsuarioIncorporador', () => {
  const fantasyname = 'Automatation Test'
  const companyname = 'QA'
  const cnpj = '12345678901234'
  const zipcode = '09810555'
  const adressnumber = '123'
  const complemento = 'Teste'
  const sharecapital = '10000000'
  const responsibleperson = 'Jardel'
  const ddi = '55'
  const phone = '11999999999'
  const email = `automation${Math.random()}@gmail.com`

  cy.get('#fantasyName').type(fantasyname)
  cy.get('#companyName').type(companyname)
  cy.get('#cnpj').type(cnpj)
  cy.get('#zipcode').type(zipcode)
  cy.get('#adressNumber').type(adressnumber)
  cy.get('#country').select('Brazil')
  cy.get('#complemento').type(complemento)
  cy.get('#shareCapital').type(sharecapital)
  cy.get('#responsiblePerson').type(responsibleperson)
  cy.get('#ddi').type(ddi)
  cy.get('#phone').type(phone)
  cy.get('#email').type(email)
  cy.get('.h-9').click()
  cy.wait('@createUserCorp')
  cy.get('.Toastify__toast-body > :nth-child(2)')
    .should('be.visible')
    .and(
      'contain',
      'Cadastro realizado com sucesso, sua senha será enviada por e-mail.',
    )
})
