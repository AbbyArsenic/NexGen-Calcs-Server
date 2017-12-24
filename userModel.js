const mongoose = require('mongoose');

const Schema = mongoose.Schema; 
const UserSchema = new Schema({
  username: {
    type: String,
    trim: true, 
    unique: true, 
    required: "Username is required"
  }, 
  email: {
    type: String, 
    trim: true, 
    unique: true,
    required: "Email is required"
  }, 
  firstname: {
    type: String, 
    trim: true, 
    required: true
  }, 
  lastname: {
    type: String, 
    trim: true, 
    required: true
  }, 
  usercreated: {
    type: Date, 
    default: Date.now
  }
});

// Create mongoose model from schema
const User = mongoose.model("User", UserSchema);

// Export User model
module.exports = User;