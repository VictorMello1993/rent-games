## Usuários
* [x] Cadastro e usuários
* [x] Criptografia de senha
* [x] Refatorar o serviço de usuários para que antes de cadastrar verificar se o usuário existe pelo e-mail
* [x] Autenticação e autorização

## Games
* [x] Cadastro de games
* [x] Listagem de games disponíveis para aluguel
* [x] Refatorar o serviço de games para que antes de cadastrar verificar se existe um jogo pelo nome
* [x] Verificar se antes de cadastrar um jogo o gênero informado é válido
* [x] Criar um middleware que verifique se o usuário está autenticado como administrador antes de cadastrar um jogo

## Alugueis
* [x] Efetuar aluguel de um jogo
* [x] O usuário deve estar autenticado como usuário comum para poder efetuar um aluguel
* [x] O aluguel deve ter duração mínima de 7 dias

## Devolução do aluguel
* [x] Devolução de um jogo
* [x] Se o horário de devolução for superior ao horário previsto de entrega, calcular o valor da multa proporcional aos dias de atraso
* [x] Se o jogo for devolvido em menos de 7 dias, será cobrado o valor da diária
* [x] Ao realizar a devolução, será obtido o valor total do aluguel (diária + multa)
* [x] O usuário deve estar autenticado para efetuar uma devolução


## Requisitos não funcionais
* [ ] Criar um middleware para validação dos parâmetros de entrada da API
* [x] O tempo de duração do token do usuário deve ser de 4 horas
* [x] Criar os Input Models e View Models em vez de expor as classes de entidade nos serviços







