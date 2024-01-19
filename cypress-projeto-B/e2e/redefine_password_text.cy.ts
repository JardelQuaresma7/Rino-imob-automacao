describe('verificando textos da redefinição de senha', () => {
  beforeEach(() => {
    cy.visit({
      url: 'https://client.homol.imobcoin.com/auth/reset-password?cod=blbK9iYohsyJcWOyw7AFlftkpvDVonlgxFhBB9re5CKFZ7p77SDNmLcdaKZNzIXB3wPYGn5WDIT2lxa0iv26P1rpKMFKNaL7qfbOd5IHpVcWa5ZRdXk6Rxkn6MWue89l6ziiYlEkhOd9ZdHfQxsvDFOXZckmJobipYtws3LZgJJQQjZk5zRYamawTw0ikRfGdZCCGjry', // <== change this ever
      headers: { 'accept-language': 'pt' },
    })
    cy.fecharCookie()
  })
  it('verificando textos da redefinição de senha', () => {
    cy.verificarTextosPaginaRedefinirSenha()
  })
})
