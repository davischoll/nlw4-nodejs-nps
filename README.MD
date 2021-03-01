# API REST para aplicação Net Promoter Score

Projeto construído durante a quarta edição da Semana NLW (Next Level Week) - Trilha NodeJS BackEnd, da [Rocketseat](https://rocketseat.com.br/). Fevereiro/2021.

## Sobre o Net Promoter Score - NPS
A Pesquisa NPS (Net Promoter Score) é aplicada por empresas que desejam descobrir como está a experiência e o grau de satisfação de seus clientes com os produtos ou serviços por elas prestados. A partir dos feedbacks recebidos na pesquisa, as empresas podem, então, tomar ações a fim de melhorar. O NPS tem sido mundialmente usado e é uma das melhores metodologias para medir a satisfação e coletar a opinião dos consumidores com rapidez, facilidade e confiabilidade. Consiste em apenas uma única questão enviada aos usuários/clientes, que é a indicação de uma nota (de 0 a 10) para a empresa.

## Features do projeto
- Cadastro de usuários;
- Cadastro de pesquisas;
- Envio de email com a pesquisa aos usuários.

## Pré-requisitos | Rodando a aplicação
Para rodar o projeto no seu ambiente local, você precisará ter instalado na sua máquina o NodeJS, Yarn e o Git.
- Clonar o projeto;
- Acessar o diretório do projeto e instalar as dependências;
- Executar a aplicação em modo de desenvolvimento.

No terminal:
```
$ git clone https://github.com/davischoll/nlw4-nodejs-nps
$ yarn
$ yarn dev
```
O servidor iniciará na porta 3333 e você pode acessar pelo seu navegador em http://localhost:3333.<br/>
Para criar, testar as requisições e visualizar as respostas do servidor, foi utilizado o [Insomnia](https://insomnia.rest/download/).<br/>
E para consultar e manipular as tabelas do banco de dados, foi utilizado o editor de SQL [Beekeeper Studio](https://www.beekeeperstudio.io/).

## Tecnologias Utilizadas
  Algumas das tecnologias utilizadas durante o desenvolvimento da API:
<br>
<p align="center">
  <img  src="https://img.shields.io/badge/-Yarn-2C8EBB?&style=for-the-badge&logoColor=fff&logo=yarn&logoWidth=25"/>
  <img  src="https://img.shields.io/badge/-TypeScript-3178C6?&style=for-the-badge&logoColor=fff&logo=TypeScript&logoWidth=25"/>
  <img  src="https://img.shields.io/badge/-Node.js-339933?&style=for-the-badge&logoColor=fff&logo=Node.js&logoWidth=25"/>
  <img  src="https://img.shields.io/badge/-Jest-C21325?&style=for-the-badge&logoColor=fff&logo=Jest&logoWidth=25"/>
  <img  src="https://img.shields.io/badge/-Typeorm-F37626?&style=for-the-badge&logoColor=fff&logo=Databricks&logoWidth=25"/>
  <img  src="https://img.shields.io/badge/-Nodemailer-009CAB?&style=for-the-badge&logoColor=fff&logo=Gmail&logoWidth=25"/>
</p>

+ [Sqlite](https://www.sqlite.org/index.html)
+ [Ethereal](https://ethereal.email/)
+ [Handlebars](https://handlebarsjs.com/)
+ [Yup](https://github.com/jquense/yup)

## Autor
* **Davi Scholl** - [LinkedIn](https://www.linkedin.com/in/davischoll/)

## Licença
Licenciado sob a licença MIT - veja [LICENSE](LICENSE) para mais informações.