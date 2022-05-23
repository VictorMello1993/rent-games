## Projeto: Rent Games
API responsável pelo gerenciamento de alugueis de games de uma locadora.

## Diagrama de casos de uso
![CasoUsoRentalGames](https://user-images.githubusercontent.com/35710766/169889660-0a99653b-d50f-4eba-84aa-bd55806f6fbf.png)

## Diagrama de classes
![DiagramaClasseRentalGames](https://user-images.githubusercontent.com/35710766/169889765-d7a24cbd-fb71-4c59-af1a-f9799f52ac0e.png)


## Requisitos funcionais
**Cadastro de usuários**
* [x] Cadastro de usuários
* [x] Autenticação de usuários

**Cadastro de games**
* [x] Cadastro de games
* [x] O usuário deve estar autenticado como administrador para cadastrar um jogo toda vez que chegar na locadora
* [x] Listagem de games disponíveis para aluguel

**Aluguel**
* [x] Efetuar aluguel de um jogo
* [x] O usuário deve estar autenticado como usuário comum para poder efetuar um aluguel
* [x] O aluguel deve ter duração mínima de 7 dias

**Devolução do aluguel**
* [x] Devolução de um jogo
* [x] Se o horário de devolução for superior ao horário previsto de entrega, calcular o valor da multa proporcional aos dias de atraso
* [x] Se o jogo for devolvido em menos de 7 dias, será cobrado o valor da diária
* [x] Ao realizar a devolução, será obtido o valor total do aluguel (diária + multa)
* [x] O usuário deve estar autenticado para efetuar uma devolução


## Requisitos não funcionais
* [ ] Criar um middleware para tratamento de erros das requisições
* [x] Criar um middleware para validação dos parâmetros de entrada da API
* [x] O tempo de duração do token do usuário deve ser de 4 horas

## Bibliotecas utilizadas
* <a href="https://www.npmjs.com/package/express">Express</a>
* <a href="https://www.npmjs.com/package/cors">cors</a>
* <a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a>
* <a href="https://www.npmjs.com/package/bcryptjs">bcryptjs</a>
* <a href="https://www.npmjs.com/package/dotenv">dotenv</a>
* <a href="https://www.npmjs.com/package/dayjs">dayjs</a>
* <a href="https://www.npmjs.com/package/joi">joi</a>
* <a href="https://www.npmjs.com/package/uuid">uuid</a>
* <a href="https://www.npmjs.com/package/nodemon">nodemon</a>

## Executando o projeto

1. Clonar o repositório 
```sh
git clone https://gitlab.com/pos-fullstack-2022-01/api-aluguel-games-victor-mello.git
```

2. Instalar todas as dependências ao projeto
```sh
# npm
npm install

# Yarn
yarn
```

3. Executando o servidor
```sh
# npm
npm run dev

# Yarn
yarn dev
```

OBS: para testar o endpoint de autenticação de usuário, é preciso adicionar o arquivo `.env` na raíz do projeto com a variável SECRET_KEY para incluir o valor da chave secreta que deve ser criptografada. Deixarei o arquivo `.env.example` para melhor visualização.


## Endpoints para importar
Os endpoints se encontram quando clicar no botão abaixo para importar a collection automaticamente dentro de um programa cliente HTTP (contanto que já possua um cliente instalado no computador). Dessa forma, isso elimina a necessidade de ter um arquivo json salvo no seu computador e ter que importar manualmente dentro de um cliente.

### Insomnia
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Rent%20Games%20-%20Backend%20com%20Node.js%20e%20Express%20-%20Victor%20Mello&uri=https%3A%2F%2Fgist.githubusercontent.com%2FVictorMello1993%2F9d7f6d6d4b7ddc36003ae31e45d759b3%2Fraw%2Fc85c7de056a66087a23c3af8ff8ff9d3027f0efc%2Fgistfile1.txt)


### Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/999aa62c466d19ebb44a?action=collection%2Fimport)
