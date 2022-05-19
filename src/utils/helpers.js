const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const dayjs = require('dayjs')
const localizedFormat = require('dayjs/plugin/localizedFormat')
const utc = require('dayjs/plugin/utc')

dotenv.config()
dayjs.extend(utc)
dayjs.extend(localizedFormat)

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

exports.convertToUTC = (date) => {
  return dayjs(date).utc().local().format()
}

exports.dateNow = () => {
  return dayjs().format('DD/MM/YYYY')
}

exports.toDateArray = (dateStr) => {
  return dateStr.split('/').map(part => Number(part))
}

exports.toDate = (dateArray) => {
  const [day, month, year] = dateArray
  return new Date(year, month-1, day).toISOString() 
}

exports.compareInDays = (start_date, end_date) => {
  const start_date_array = this.toDateArray(start_date)
  const end_date_array = this.toDateArray(end_date)

  const start_date_aux = this.toDate(start_date_array)
  const end_date_aux = this.toDate(end_date_array)

  const start_date_utc = this.convertToUTC(start_date_aux)
  const end_date_utc = this.convertToUTC(end_date_aux)

  return dayjs(end_date_utc).diff(start_date_utc, 'days')
}

