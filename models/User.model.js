const { Schema, model } = require("mongoose");


let UserSchema = new Schema({
  userName: String,
  firstName: String,
  lastName: String,
  type: String, 
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