const { Schema, model } = require("mongoose");


let UserSchema = new Schema({
  firstName: String,
  lastName: String, 
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  }
})


let UserModel = model('user', UserSchema)


module.exports = UserModel