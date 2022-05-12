const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

app.use(express.json());
app.use(routes);
app.use(cors());

app.get('/', (req, res) => {
  return res.json({messsage: 'Serviço executado com sucesso'})
})

module.exports = app