const dayjs = require('dayjs')
const localizedFormat = require('dayjs/plugin/localizedFormat')
const utc = require('dayjs/plugin/utc')

dayjs.extend(utc)
dayjs.extend(localizedFormat)

exports.convertToUTC = (date) => {
  return dayjs(date).utc().local().format()
}

exports.dateNow = () => {
  return dayjs().format('DD/MM/YYYY')
}

exports.dateTimeNow = () => {
  return dayjs().format('DD/MM/MM HH:mm:ss')
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