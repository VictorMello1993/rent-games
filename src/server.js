const app = require('./app')

const port = 3001

// app.use((err, req, res, next) => {
//   console.log('error middleware')
//   if(err instanceof Error){
//     return res.status(400).json({
//       message: err.message
//     })
//   }

//   return res.status(500).json({
//     status: 'error',
//     message: 'Internal server error'
//   })
// })

app.listen(port, () => console.log('Servidor em execução...'))