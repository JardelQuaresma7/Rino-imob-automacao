import { get } from 'cypress/types/lodash'

describe('Alocação de bricks', () => {
  beforeEach(() => {
    cy.allocateRequest()
    cy.getWallet()
    cy.getEnterpriseBricks()

    const email = 'sathoskath@gmail.com'
    const password = 'Password!111'

    cy.login(email, password)
    cy.visit('/enterprises', { headers: { 'accept-language': 'pt' } })
  })

  it('Testando alocação de bricks no Ahead Aclimação', () => {
    cy.wait('@getWallet')
    cy.get(':nth-child(4) > .h-7').click()
    cy.wait('@getEnterpriseBricks')
    cy.wait('@getWallet')
    cy.get(':nth-child(2) > .text-5 > .gap-3 > .bg-green').click()
    cy.get('.sticky > .items-center > .h-9').click()
    cy.wait('@allocateRequest')
    cy.contains('Parabéns pela alocação').should('be.visible')
    cy.get('.bottom-4 > .block').click()
    cy.url().should('eq', 'http://localhost:3000/enterprises')
  })

  it('Testando alocação de bricks no Alive Vila Mariana', () => {
    cy.wait('@getWallet')
    cy.get(':nth-child(5) > .h-7').click()
    cy.wait('@getEnterpriseBricks')
    cy.wait('@getWallet')
    cy.get(':nth-child(2) > .text-5 > .gap-3 > .bg-green').click()
    cy.get('.h-9').click()
    cy.wait('@allocateRequest')
    cy.contains('Parabéns pela alocação').should('be.visible')
    cy.get('.bottom-4 > .block').click()
    cy.url().should('eq', 'http://localhost:3000/enterprises')
  })

  it('Testando alocação de bricks no DIY Bela Vista', () => {
    cy.wait('@getWallet')
    cy.get(':nth-child(6) > .h-7').click()
    cy.wait('@getEnterpriseBricks')
    cy.wait('@getWallet')
    cy.get(':nth-child(2) > .text-5 > .gap-3 > .bg-green').click()
    cy.get('.h-9').click()
    cy.wait('@allocateRequest')
    cy.contains('Parabéns pela alocação').should('be.visible')
    cy.get('.bottom-4 > .block').click()
    cy.url().should('eq', 'http://localhost:3000/enterprises')
  })

  it('Testando alocação de bricks no EB500', () => {
    cy.wait('@getWallet')
    cy.get(':nth-child(7) > .h-7').click()
    cy.wait('@getEnterpriseBricks')
    cy.wait('@getWallet')
    cy.get(':nth-child(2) > .text-5 > .gap-3 > .bg-green').click()
    cy.get('.h-9').click()
    cy.wait('@allocateRequest')
    cy.contains('Parabéns pela alocação').should('be.visible')
    cy.get('.bottom-4 > .block').click()
    cy.url().should('eq', 'http://localhost:3000/enterprises')
  })

  it('Testando alocação de bricks no diy pelos detalhes do empreendimento', () => {
    cy.wait('@getWallet')
    cy.get(
      'main > :nth-child(2) > div > .w-full .swiper-wrapper > :nth-child(1) a',
    ).click()
    cy.url().should('eq', 'http://localhost:3000/enterprises/diy')
    cy.get('.mx-auto > .flex-col > .block').click()
    cy.wait('@getEnterpriseBricks')
    cy.wait('@getWallet')
    cy.get(':nth-child(2) > .text-5 > .gap-3 > .bg-green > .w-4').click()
    cy.get('.h-9').click()
    cy.wait('@allocateRequest')
    cy.contains('Parabéns pela alocação').should('be.visible')
    cy.get('.bottom-4 > .block').click()
    cy.url().should('eq', 'http://localhost:3000/enterprises')
  })

  it('Testando alocação de bricks no ahead pelos detalhes do empreendimento', () => {
    cy.wait('@getWallet')
    cy.get(
      'main > :nth-child(2) > div > .w-full .swiper-wrapper > :nth-child(2) a',
    ).click()
    cy.url().should('eq', 'http://localhost:3000/enterprises/ahead')
    cy.get('.mx-auto > .flex-col > .block').click()
    cy.wait('@getEnterpriseBricks')
    cy.wait('@getWallet')
    cy.get(':nth-child(2) > .text-5 > .gap-3 > .bg-green > .w-4').click()
    cy.get('.h-9').click()
    cy.wait('@allocateRequest')
    cy.contains('Parabéns pela alocação').should('be.visible')
    cy.get('.bottom-4 > .block').click()
    cy.url().should('eq', 'http://localhost:3000/enterprises')
  })

  it('Testando alocação de bricks no Alive pelos detalhes do empreendimento', () => {
    cy.wait('@getWallet')
    cy.get(
      'main > :nth-child(2) > div > .w-full .swiper-wrapper > :nth-child(3) a',
    ).click()
    cy.url().should('eq', 'http://localhost:3000/enterprises/alive')
    cy.get('.mx-auto > .flex-col > .block').click()
    cy.wait('@getEnterpriseBricks')
    cy.wait('@getWallet')
    cy.get(':nth-child(2) > .text-5 > .gap-3 > .bg-green > .w-4').click()
    cy.get('.h-9').click()
    cy.wait('@allocateRequest')
    cy.contains('Parabéns pela alocação').should('be.visible')
    cy.get('.bottom-4 > .block').click()
    cy.url().should('eq', 'http://localhost:3000/enterprises')
  })

  it('Testando alocação de bricks no Eb500 pelos detalhes do empreendimento', () => {
    cy.wait('@getWallet')
    cy.get(
      'main > :nth-child(2) > div > .w-full .swiper-wrapper > :nth-child(4) a',
    ).click()
    cy.url().should('eq', 'http://localhost:3000/enterprises/eb500')
    cy.get('.mx-auto > .flex-col > .block').click()
    cy.wait('@getEnterpriseBricks')
    cy.wait('@getWallet')
    cy.get(':nth-child(2) > .text-5 > .gap-3 > .bg-green > .w-4').click()
    cy.get('.h-9').click()
    cy.wait('@allocateRequest')
    cy.contains('Parabéns pela alocação').should('be.visible')
    cy.get('.bottom-4 > .block').click()
    cy.url().should('eq', 'http://localhost:3000/enterprises')
  })

  it('Testando acessar tela de alocação de bricks com segundo botão da sessão', () => {
    cy.wait('@getWallet')
    cy.get(
      'main > :nth-child(2) > div > .w-full .swiper-wrapper > :nth-child(1) a',
    ).click()
    cy.url().should('eq', 'http://localhost:3000/enterprises/diy')
    cy.get(':nth-child(4) > .mx-auto > .rounded-md').click()
  })

  it('Testando voltar para tela de empreendimentos', () => {
    cy.get(
      'main > :nth-child(2) > div > .w-full .swiper-wrapper > :nth-child(1) a',
    ).click()
    cy.wait('@getWallet')
    cy.url().should('eq', 'http://localhost:3000/enterprises/diy')
    cy.contains('Voltar').click()
    cy.url().should('eq', 'http://localhost:3000/enterprises')
  })

  // EXECUTAR SOMENTE QUANDO CARTEIRA ZERADA
  // it('Testando inserir quantidade bricks com o valor 0 na carteira', () => {
  // //   cy.get('.rotate-90').click()
  //   cy.get(
  //     'main > :nth-child(2) > div > .w-full .swiper-wrapper > :nth-child(1) a',
  //   ).click()
  //   cy.wait('@getWallet')
  //   cy.url().should('eq', 'http://localhost:3000/enterprises/diy')
  //   cy.get('.mx-auto > .flex-col > .block').click()
  //   cy.get(':nth-child(2) > .text-5 > .gap-3 > .bg-green').click()
  // })
  it('Testando tentativa de alocar bricks sem selecionar quantidade', () => {
    cy.get(
      'main > :nth-child(2) > div > .w-full .swiper-wrapper > :nth-child(1) a',
    ).click()
    cy.wait('@getWallet')
    cy.url().should('eq', 'http://localhost:3000/enterprises/diy')
    cy.get('.mx-auto > .flex-col > .block').click()
    cy.get('.sticky > .items-center > .h-9').click()
    cy.get('.Toastify__toast-body > :nth-child(2)')
      .should('be.visible')
      .and('have.text', 'Bricks insuficientes para alocação.')
  })
})
