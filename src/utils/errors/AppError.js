module.exports = class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message)
    this.statusCode = statusCode
    this.messages = []

    if(Array.isArray(message)){
      for(let msg of message){
        this.messages.push(msg)
      }    
    }
  }
}