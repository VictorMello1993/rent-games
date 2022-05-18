const listAvailableUseCase = require('../listAvailable/listAvailableUseCase')

module.exports.handle = (req, res) => {
  const result = listAvailableUseCase.execute()
  return res.json(result)
}