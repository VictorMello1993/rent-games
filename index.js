const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.json({messsage: 'Serviço executado com sucesso'})
})

app.listen(3001, () => console.log('Servidor executando...'))



