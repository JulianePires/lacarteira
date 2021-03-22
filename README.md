<div align="center" id="top"> 
  &#xa0;
</div>

<h1 align="center">La Carteira - Mantendo o seu bolso gerenciado</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/JulianePires/lacarteira?color=33CC95">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/JulianePires/lacarteira?color=33CC95">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JulianePires/lacarteira?color=33CC95">

  <img alt="License" src="https://img.shields.io/github/license/JulianePires/lacarteira?color=33CC95">

  <img alt="Github issues" src="https://img.shields.io/github/issues/JulianePires/lacarteira?color=33CC95" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/JulianePires/lacarteira?color=33CC95" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/JulianePires/lacarteira?color=33CC95" />
</p>

## :rocket: Technologies ##

- [ReactJS](https://pt-br.reactjs.org/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Typescript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [CSS3](https://www.w3schools.com/css/)

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/JulianePires/lacarteira

# Access
$ cd mobix-challenge

# Install dependencies
$ yarn

# Run the project
$ yarn start

# The server will initialize in the <http://localhost:3000>
```

## Logbook

### Criando a aplicação com create-react-app

--> A criação de aplicações em React do zero, com as configurações do Webpack e do Babel e de todo o ambiente de desenvolvimento é bem interessante, pois deixa o ambiente customizável de acordo com as necessidades do seu projeto. Mas em alguns casos, o create-react-app facilita muito a vida por trazer boa parte dessas definições previamente configuradas. Portanto, utilizamos o seguinte comando para a criação da aplicação:

```
$ yarn create react-app lacarteira --template typescript 
```

Note que o template do typescript foi utilizado, pois iremos utilizá-lo na linguagem tipada.

### Licença

--> Por ser uma aplicação a ser utilizada posteriormente, a escolha da licensa foi a MIT, que torna disponível o uso comercial e privado, além de modificação e distribuição da aplicação, mas detém os direitos autorais.

### Styled-components

--> A escolha do styled-components vem pela facilidade de customização de estilo através da criação de componentes estilizados utilizando javascript, é um recurso super interessante e poderoso, já que reduz o uso de classes e id's para determinação de estilos, problemas de acesso aos arquivos CSS e torna a legibilidade do código muito mais fácil de interpretar.
--> Uma das vantagens da utilização do styled-components é que, assim como o sass, também permite o uso do encadeamento, ou seja, caso um elemento possua um outro elemento como filho, é possível realizar a estilização do mesmo dentro da estilização desse componente.
--> Outra vantagem é a utilização da estilização limitada ao escopo em que o componente estilizado foi criado. Ele acaba gerando uma classe com uma chave única para que a estilização daquele componente não interfira no restante da aplicação.