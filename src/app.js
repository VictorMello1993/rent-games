const express = require('express');
const app = express();
const cors = require('cors');
const {v4: uuid} = require('uuid');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { hash } = require('bcrypt');
require('dotenv').config();

app.use(express.json());
app.use(cors());

const users = []
const games = []

const genres = [
  {
    id: 1,
    name: 'Ação'
  },
  {
    id: 2,
    name: 'Aventura'
  },
  {
    id: 3,
    name: 'Tiro em primeira pessoa (FPS)'
  },
  {
    id: 4,
    name: 'Puzzle'
  },
  {
    id: 5,
    name: 'Jogo de tabuleiro'
  },
  {
    id: 6,
    name: 'RPG'
  },
  {
    id: 7,
    name: 'Estratégia'
  },
  {
    id: 8,
    name: 'Luta'
  },
  {
    id: 9,
    name: 'Esportes'
  },
  {
    id: 10,
    name: 'Indie'
  },
  {
    id: 11,
    name: 'Terror'
  },
]

app.get('/', (req, res) => {
  return res.json({messsage: 'Serviço executado com sucesso'})
})

//Cadastro de usuário
app.post('/users', async (req, res) => {
  const {name, email, password} = req.body

  const user = users.find(user => user.email === email)

  if(user) {
    return res.status(400).json({messsage: 'Usuário já existe com e-mail especificado.'})
  }

  const hashedPassword = await hash(password, 10)

  users.push({id: uuid(), name, email, password: hashedPassword, admin: false, createdAt: new Date()})

  return res.status(201).send(users[users.length - 1])
})

//Cadastro de games
app.post('/games', (req, res) => {
  const {name, description, idGenre, releaseDate} = req.body

  const game = games.find(game => game.name === name)

  if(game) {
    return res.status(400).json({messsage: 'Jogo já existe com nome especificado.'})
  }

  const genre = genres.find(genre => genre.id === idGenre)

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

//Login
app.post('/users/login', async (req, res) => {
  
  const {email, password} = req.body

  const user = users.find(user => user.email === email)

  if(!user){
    return res.status(400).send({message: 'Usuário ou senha inválido'})
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if(!passwordMatch){
    return res.status(400).send({message: 'Usuário ou senha inválidos'})
  }

  const token = sign({email}, process.env.SECRET_KEY, {
    subject: user.id,
    expiresIn: '1d'
  })

  return res.json(token)
})

module.exports = app