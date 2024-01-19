describe('Compra de bricks', () => {
  beforeEach(() => {
    cy.paymenteBricks()
    cy.getWallet()

    const email = 'jardel.lima@rinobox.com.br'
    const password = 'Sonecasfc77@'

    cy.login(email, password)
    cy.visit('/enterprises', { headers: { 'accept-language': 'pt' } })
  })

  it('Testando acesso a tela de compra de bricks', () => {
    cy.wait('@getWallet')
    cy.contains('Comprar Bricks').click()
    cy.url().should('eq', 'http://localhost:3000/bricks/payment')
  })

  it('Testando comprar bricks com método de pagamento TED', () => {
    cy.wait('@getWallet')
    cy.contains('Comprar Bricks').click()
    cy.url().should('eq', 'http://localhost:3000/bricks/payment')
    cy.get('.mb-5 > :nth-child(1)').click()
    cy.get('#agreeTerms').click()
    cy.get('.flex > .rounded-lg').click()
    cy.get('.mt-10 > .grid > :nth-child(1)').click()
    cy.contains('CONFIRMAR COMPRA').click()
    cy.wait('@paymenteBricks')
    cy.get('.fixed > .relative').should('be.visible')
    cy.contains('Voltar para Minha Carteira').click()
  })

  it('Testando comprar bricks com método de pagamento SWIFT DOLLAR', () => {
    cy.wait('@getWallet')
    cy.contains('Comprar Bricks').click()
    cy.url().should('eq', 'http://localhost:3000/bricks/payment')
    cy.get('.mb-5 > :nth-child(2)').click()
    cy.get('#agreeTerms').click()
    cy.get('.flex > .rounded-lg').click()
    cy.get('.mt-10 > .grid > :nth-child(2)').click()
    cy.contains('CONFIRMAR COMPRA').click()
    cy.wait('@paymenteBricks')
    cy.get('.fixed > .relative').should('be.visible')
    cy.contains('Voltar para Minha Carteira').click()
  })

  it('Testando comprar bricks com método de pagamento SWIFT EURO', () => {
    cy.wait('@getWallet')
    cy.contains('Comprar Bricks').click()
    cy.url().should('eq', 'http://localhost:3000/bricks/payment')
    cy.get('.mb-5 > :nth-child(3)').click()
    cy.get('#agreeTerms').click()
    cy.get('.flex > .rounded-lg').click()
    cy.get('.mt-10 > .grid > :nth-child(3)').click()
    cy.contains('CONFIRMAR COMPRA').click()
    cy.wait('@paymenteBricks')
    cy.get('.fixed > .relative').should('be.visible')
    cy.contains('Voltar para Minha Carteira').click()
  })

  it('Testando comprar bricks com método de pagamento PIX', () => {
    cy.wait('@getWallet')
    cy.contains('Comprar Bricks').click()
    cy.url().should('eq', 'http://localhost:3000/bricks/payment')
    cy.get('.mb-5 > :nth-child(4)').click()
    cy.get('#agreeTerms').click()
    cy.get('.flex > .rounded-lg').click()
    cy.get('.mt-10 > .grid > :nth-child(4)').click()
    cy.contains('CONFIRMAR COMPRA').click()
    cy.wait('@paymenteBricks')
    cy.get('.fixed > .relative').should('be.visible')
    cy.contains('Voltar para Minha Carteira').click()
  })

  it('Testando comprar bricks inserindo outros valores', () => {
    cy.wait('@getWallet')
    cy.contains('Comprar Bricks').click()
    cy.url().should('eq', 'http://localhost:3000/bricks/payment')
    cy.get('.mb-5 > .col-span-2').click()
    cy.get('.mb-3').should('be.visible')
    cy.get('.mb-3').type('1000000')
    cy.get('#agreeTerms').click()
    cy.get('.flex > .rounded-lg').click()
    cy.get('.mt-10 > .grid > :nth-child(4)').click()
    cy.contains('CONFIRMAR COMPRA').click()
    cy.wait('@paymenteBricks')
    cy.get('.fixed > .relative').should('be.visible')
    cy.contains('Voltar para Minha Carteira').click()
  })

  it('Testando comprar sem aceitar os termos de uso', () => {
    cy.wait('@getWallet')
    cy.contains('Comprar Bricks').click()
    cy.url().should('eq', 'http://localhost:3000/bricks/payment')
    cy.get('.mb-5 > :nth-child(4)').click()
    cy.get('.flex > .rounded-lg').click()
    cy.contains(
      'Você precisar concordar com os termos para prosseguir com a compra.',
    ).should('be.visible')
  })

  it('Testando entrar na página de compras e clicar no Voltar', () => {
    cy.wait('@getWallet')
    cy.contains('Comprar Bricks').click()
    cy.url().should('eq', 'http://localhost:3000/bricks/payment')
    cy.contains('Voltar').click()
    cy.url().should('eq', 'http://localhost:3000/enterprises')
  })

  // it('Testando voltar na página de selecionar valor após avançar para métodos de pagamento', () => {
  //   cy.get('.rotate-90').click()
  //   cy.get(
  //     '.bg-blue.text-center.font-bold.text-white.w-64.py-2.shadow-2xl',
  //   ).click()
  //   cy.url().should('eq', 'http://localhost:3000/paymentBricks')
  //   cy.get('.mb-5 > :nth-child(4)').click()
  //   cy.get('#agreeTerms').click()
  //   cy.get('.flex > .rounded-lg').click()
  //   cy.contains('Voltar').click()
  // })
})
