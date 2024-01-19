declare namespace Cypress {
  interface Chainable {
    verificarTextosPaginaEsqueciSenha(): Chainable<any>
    verificarTextosPaginaRedefinirSenha(): Chainable<any>
    verificarElementosPaginaLogin(): Chainable<any>
    fecharCookie(): Chainable<any>
    login(user: string, password: string): Chainable<any>
    getWallet(): Chainable<any>
    forgotPassword(): Chainable<any>
    verificarTextosPaginaCriarConta(): Chainable<any>
    createUserCorp(): Chainable<any>
    CriarUsuarioIncorporador(): Chainable<any>
  }
}
