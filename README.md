## Projeto: Rent Games
API responsável pelo gerenciamento de alugueis de games de uma locadora.

## Diagrama de casos de uso
![CasoUsoRentalGames](https://user-images.githubusercontent.com/35710766/169889660-0a99653b-d50f-4eba-84aa-bd55806f6fbf.png)

## Diagrama de classes
![DiagramaClasseRentalGames](https://user-images.githubusercontent.com/35710766/169889765-d7a24cbd-fb71-4c59-af1a-f9799f52ac0e.png)

## Requisitos funcionais
**Usuários**
* [x] Cadastro e usuários
* [x] Criptografia de senha
* [x] Refatorar o serviço de usuários para que antes de cadastrar verificar se o usuário existe pelo e-mail
* [x] Autenticação e autorização

**Games**
* [x] Cadastro de games
* [x] Listagem de games disponíveis para aluguel
* [x] Refatorar o serviço de games para que antes de cadastrar verificar se existe um jogo pelo nome
* [x] Verificar se antes de cadastrar um jogo o gênero informado é válido
* [x] Criar um middleware que verifique se o usuário está autenticado como administrador antes de cadastrar um jogo

**Alugueis**
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
* [ ] Criar um middleware para validação dos parâmetros de entrada da API
* [x] O tempo de duração do token do usuário deve ser de 4 horas
* [x] Criar os Input Models e View Models em vez de expor as classes de entidade nos serviços

## Bibliotecas utilizadas
* <a href="https://nestjs.com/">nestjs</a>
* <a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a>
* <a href="https://www.npmjs.com/package/bcryptjs">bcryptjs</a>
* <a href="https://www.npmjs.com/package/dotenv">dotenv</a>
* <a href="https://www.npmjs.com/package/dayjs">dayjs</a>
* <a href="https://www.npmjs.com/package/uuid">uuid</a>
* <a href="https://www.npmjs.com/package/pg">pg</a>
* <a href="https://www.npmjs.com/package/eslint">eslint</a>
* <a href="https://www.npmjs.com/package/typeorm">typeorm</a>
* <a href="https://www.npmjs.com/package/typescript">typescript</a>
* <a href="https://www.npmjs.com/package/passport">passport</a>
* <a href="https://www.npmjs.com/package/passport-http">passport-http</a>
* <a href="https://www.npmjs.com/package/passport-jwt">passport-jwt</a>

## Executando o projeto

1. Selecionar a branch `with-nestjs` e clonar o repositório  
```sh
git clone https://github.com/VictorMello1993/rent-games.git
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
npm run start:dev

# Yarn
yarn start:dev
```

## Banco de dados
1. para testar o endpoint de autenticação de usuário, é preciso adicionar o arquivo `.env` na raíz do projeto com a variável `JWT_SECRET_KEY` para incluir o valor da chave secreta que deve ser criptografada. Deixarei o arquivo `.env.example` para melhor visualização.

2. foi utilizado Postgres como banco de dados relacional de escolha, e para estabelecer uma conexão, execute o comando `docker-compose up -d` para criar uma imagem e executar container do Postgres. Depois disso, para acessá-lo, bastar preencher os credenciais conforme o nome das variáveis de ambiente no arquivo `.env.example`

3. foi utilizado o padrão Code First para criação de tabelas ao banco de dados de maneira automatizada, através das migrations. Para subir as tabelas, basta executar o script abaixo:

```sh
#npm
npm run migration:up

#yarn
yarn migration:up
```

## Endpoints para importar
Os endpoints se encontram quando clicar no botão abaixo para importar a collection automaticamente dentro de um programa cliente HTTP (contanto que já possua um cliente instalado no computador). Dessa forma, isso elimina a necessidade de ter um arquivo json salvo no seu computador e ter que importar manualmente dentro de um cliente.

### Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Rent%20games%20V2&uri=https%3A%2F%2Fgist.githubusercontent.com%2FVictorMello1993%2Fd131fb9da2f202bbc0262eeb85f9b78d%2Fraw%2F54688f03c0f827f63d788aceabe905e2c9641285%2Fgistfile1.txt)
