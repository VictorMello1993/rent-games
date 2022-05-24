module.exports = class AppError extends Error {
  constructor(message, statuscode = 400 ) {
    super(message)
    this.statusCode = statuscode
    this.messages = []

    if(message.length > 1){
      for(let msg of message){
        this.messages.push(msg)
      }    
    }
  }
}