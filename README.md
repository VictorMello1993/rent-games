
## Projeto: Rent Games
API responsável pelo gerenciamento de alugueis de games de uma locadora.




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


### Requisitos não funcionais
* [ ] Criar um middleware para tratamento de erros das requisições
* [x] Criar um middleware para validação dos parâmetros de entrada da API
* [x] O tempo de duração do token do usuário deve ser de 4 horas
