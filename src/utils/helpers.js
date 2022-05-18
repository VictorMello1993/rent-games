const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const JWT_EXPIRES_IN = 14400 //4 horas

exports.generateHash = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  return bcrypt.hashSync(password, hashedPassword)
}

exports.generateToken = (...payload) => {      
  const [id, ...rest] = payload
  return {
    type: 'Bearer',
    token: jwt.sign({rest}, process.env.SECRET_KEY, {
      subject: id,
      expiresIn: parseInt(JWT_EXPIRES_IN)
    })
  }
}

exports.verifyToken = (token) => 
  jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if(err){
      return false
    }
    return true
  })

exports.getSubjectByToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY).sub  
}