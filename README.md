<h1 align="center">
    Mercado Libre Challenge
</h1>
<h2 align="center">  ReactJS <h2>
<p align="center">
  <a href="#zap-about">About</a>&nbsp;|&nbsp;
  <a href="#rocket-run">Run</a>&nbsp;&nbsp;&nbsp;
</p>

## :zap: About

This is a simple project made with NextJs and it is a simplified app with core functionalities of MELI.

The project was done in NextJs to allow the generation of the static page on the server-side to solve SEO issues. The requests to the MELI API are done on the server-side too and the main pages have meta tags to help on that too.

Some static words used in the website like placeholders and others are using a function "translate", if I had access to a translation engine it could be easily changed.

### Functional description of the application

- In the search bar view, you must be able to access the product you are looking for and, when sending the
  form, navigate to the search view, viewing only 4 products. Then, at
  by clicking on one of them, you must navigate to the product's detail view.
- Given a product ID, you should be able to directly access the product detail view

### Deliverable:

- Source code in a private GitHub repository. Add user ITMLB as
  contributor -> done;
- Unit testing and quality integration -> doing;
- Documentation where necessary -> done;
- Instructions on how to run the project -> done;

## :gear: Requirements to run locally

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [NextJs](https://nextjs.org/)
- [Cypress](https://www.cypress.io/)

## :rocket: Run

1. Clone repository

<pre><code>
  $ git clone https://github.com/gabriel1997castro/mercado-livre.git
</code></pre>

2. Install the dependencies of the application

<pre><code>
  $ yarn #ou npm install
</code></pre>

3. Run locally
<pre><code>
  $ yarn dev # ou npm dev
</code></pre>
  
4. Tests
  
  For unity test run the command below:
<pre><code>
  $ yarn jest 
</code></pre>
  For integration tests with cypress run the command below:
  <pre><code>
  $ yarn test
</code></pre>

Open http://localhost:3000 to view it in the browser.
