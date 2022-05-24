module.exports = (err, req, res, next) => {
  if(err instanceof Error){
    return res.status(400).json({
      message: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
}