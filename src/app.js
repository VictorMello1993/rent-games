const express = require('express');
const app = express();
const cors = require('cors');
const {v4: uuid} = require('uuid');
const routes = require('./routes');
const db = require('../src/database/db')
require('dotenv').config();

app.use(express.json());
app.use(routes);
app.use(cors());

const games = []

app.get('/', (req, res) => {
  return res.json({messsage: 'Serviço executado com sucesso'})
})

//Cadastro de games
app.post('/games', (req, res) => {
  const {name, description, idGenre, releaseDate} = req.body

  const game = games.find(game => game.name === name)

  if(game) {
    return res.status(400).json({messsage: 'Jogo já existe com nome especificado.'})
  }

  const genre = db.genres.find(genre => genre.id === idGenre)

  if(!genre) {
    return res.status(400).json({messsage: 'Gênero inválido.'})
  }

  games.push({id: uuid(), name, description, idGenre, releaseDate, available: true})

  return res.status(201).send(games[games.length - 1])
})

//Listagem de games disponíveis para aluguel
app.get('/available', (req, res) => {
  const availableGames = games.filter(game => game.available)
  return res.send(availableGames)
})

module.exports = app