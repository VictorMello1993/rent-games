const {verifyToken, getSubjectByToken} = require('../utils/helpers/authHelpers')
const JWTTokenMissingError = require('../utils/errors/JWTTokenMissingError')
const JWTAuthorizationInvalidError = require('../utils/errors/JWTAuthorizationInvalidError')
const JWTBadFormatedTokenError = require('../utils/errors/JWTBadFormatedTokenError')
const JWTInvalidTokenError = require('../utils/errors/JWTInvalidTokenError')

module.exports = (req, res, next) => {
  const {authorization} = req.headers

  if(!authorization){
    throw new JWTTokenMissingError()
  }

  const parts = authorization.split(' ')

  if(parts?.length !== 2) {
    throw new JWTAuthorizationInvalidError()
  }

  const [schema, token] = parts

  if(schema?.toLowerCase() !== 'bearer') {
    throw new JWTBadFormatedTokenError()
  }

  if(!verifyToken(token)){
    throw new JWTInvalidTokenError()
  }

  const subject = getSubjectByToken(token)

  req.user = {id: subject}

  return next()
}