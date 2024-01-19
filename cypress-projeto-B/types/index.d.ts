declare namespace Cypress {
  interface Chainable {
    verificarTextosPaginaEsqueciSenha(): Chainable<any>
    verificarTextosPaginaRedefinirSenha(): Chainable<any>
    verificarElementosPaginaLogin(): Chainable<any>
    fecharCookie(): Chainable<any>
    login(user: string, password: string): Chainable<any>
    allocateRequest(): Chainable<any>
    getWallet(): Chainable<any>
    getEnterpriseBricks(): Chainable<any>
    paymenteBricks(): Chainable<any>
    forgotPassword(): Chainable<any>
  }
}
