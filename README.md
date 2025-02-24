# Rino-imob-automacao

Bem-vindo ao projeto de automação de testes do Rino Imob! Este repositório contém scripts de testes automatizados para as plataformas de investimento imobiliário da Imobcoin, abrangendo tanto clientes interessados em adquirir "bricks" (Projeto A) quanto empreendedores buscando oportunidades de investimento (Projeto B).

## Descrição do Projeto

O Imobcoin oferece uma plataforma inovadora onde:

- **Projeto A**: Clientes podem comprar "bricks" e possuir uma fração de empreendimentos imobiliários em desenvolvimento.
- **Projeto B**: Empreendedores podem listar seus projetos para captar investimentos e expandir seus negócios.

Este repositório abriga a automação de testes desenvolvida para garantir a qualidade e a funcionalidade dessas plataformas, utilizando o framework [Cypress](https://www.cypress.io/).

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

- [Cypress](https://www.cypress.io/) - Framework de automação de testes end-to-end
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação principal
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript para maior segurança e produtividade

## Estrutura do Repositório

A estrutura do projeto está organizada da seguinte forma:

```
Rino-imob-automacao/
├── cypress/
│   ├── e2e/
│   │   ├── projetoA/
│   │   │   ├── testes/
│   │   │   └── fixtures/
│   │   └── projetoB/
│   │       ├── testes/
│   │       └── fixtures/
│   ├── support/
│   └── fixtures/
├── cypress.config.js
└── README.md
```

- `cypress/e2e/projetoA/`: Contém os testes end-to-end para o Projeto A.
- `cypress/e2e/projetoB/`: Contém os testes end-to-end para o Projeto B.
- `cypress/support/`: Arquivos de suporte e configurações adicionais.
- `cypress/fixtures/`: Arquivos estáticos utilizados nos testes.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

Siga os passos abaixo para configurar o ambiente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/JardelQuaresma7/Rino-imob-automacao.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd Rino-imob-automacao
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

## Executando os Testes

Para rodar os testes automatizados, utilize os comandos abaixo:

- Abra a interface do Cypress:

  ```bash
  npx cypress open
  ```

  ou

  ```bash
  yarn run cypress open
  ```

  Selecione o teste desejado na interface que será exibida.

- Execute os testes em modo headless (linha de comando):

  ```bash
  npx cypress run
  ```

  ou

  ```bash
  yarn run cypress run
  ```

## Contribuição

Contribuições são bem-vindas! Se você deseja melhorar os testes ou adicionar novas funcionalidades:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
