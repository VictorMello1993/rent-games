const createUserUseCase = require('./createUserUseCase')

module.exports.handle = async (req, res, next) => {
  try {
    const {email, password, name, birthdate, telephone} = req.body
    
    const result = await createUserUseCase.execute({email, name, password, birthdate, telephone})
  
    return res.status(200).send(result)

  } catch (error) {
    next(new Error(error.message))
  }
}
