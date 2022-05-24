const {verifyToken, getSubjectByToken} = require('../utils/authHelpers')

module.exports = (req, res, next) => {
  const {authorization} = req.headers

  if(!authorization){
    return res.status(401).json({
      message: 'Usuário não está autorizado a realizar este tipo de operação.'
    })
  }

  const parts = authorization.split(' ')

  if(parts?.length !== 2) {
    return res.status(401).json({message: 'Tipo de autorização inválida'})
  }

  const [schema, token] = parts

  if(schema?.toLowerCase() !== 'bearer') {
    return res.status(401).json({message: 'Token mal formatado'})
  }

  if(!verifyToken(token)){
    return res.status(401).json({message: 'Token inválido'})
  }

  const subject = getSubjectByToken(token)

  req.user = {id: subject}

  next()
}