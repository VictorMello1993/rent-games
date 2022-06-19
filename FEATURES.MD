## Usuários
* [x] Cadastro e usuários
* [x] Criptografia de senha
* [ ] Refatorar o serviço de usuários para que antes de cadastrar verificar se o usuário existe pelo e-mail
* [ ] Autenticação e autorização

## Games
* [x] Cadastro de games
* [x] Listagem de games disponíveis para aluguel
* [ ] Refatorar o serviço de games para que antes de cadastrar verificar se existe um jogo pelo nome
* [ ] Verificar se antes de cadastrar um jogo o gênero informado é válido
* [ ] Criar um middleware que verifique se o usuário está autenticado como administrador antes de cadastrar um jogo

## Alugueis
* [ ] Efetuar aluguel de um jogo
* [ ] O usuário deve estar autenticado como usuário comum para poder efetuar um aluguel
* [ ] O aluguel deve ter duração mínima de 7 dias

## Devolução do aluguel
* [ ] Devolução de um jogo
* [ ] Se o horário de devolução for superior ao horário previsto de entrega, calcular o valor da multa proporcional aos dias de atraso
* [ ] Se o jogo for devolvido em menos de 7 dias, será cobrado o valor da diária
* [ ] Ao realizar a devolução, será obtido o valor total do aluguel (diária + multa)
* [ ] O usuário deve estar autenticado para efetuar uma devolução


## Requisitos não funcionais
* [ ] Criar um middleware para tratamento de erros das requisições
* [ ] Criar um middleware para validação dos parâmetros de entrada da API
* [ ] O tempo de duração do token do usuário deve ser de 4 horas
* [ ] Criar os Input Models e View Models em vez de expor as classes de entidade nos serviços







