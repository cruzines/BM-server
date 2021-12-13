const { Schema, model } = require("mongoose");


let UserSchema = new Schema({
  firstName: String,
  lastName: String, 
  email: {
    type: String,
    required: false
  },
  passwordHash: {
    type: String,
    required: false
  }
}, { timestamps: true })


let UserModel = model('user', UserSchema)


module.exports = UserModel