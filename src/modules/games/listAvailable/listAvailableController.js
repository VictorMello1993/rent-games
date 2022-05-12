const listAvailableUseCase = require('../listAvailable/listAvailableUseCase')

exports.handle = (req, res) => {
  const result = listAvailableUseCase.execute()
  return res.json(result)
}