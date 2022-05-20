const devolutionRentalUseCase = require('../devolutionRental/devolutionRentalUseCase')

module.exports.handle = (req, res) => {
  const {id: user_id} = req.user
  const {id} = req.params

  const result = devolutionRentalUseCase.execute({
    id,
    user_id
  })

  return res.status(200).json(result)
}