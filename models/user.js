const { Mongoose } = require("mongoose");
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
	userId: {
		type: Number,
		required: true
	},
	username: {
		type: String,
		unique: true
	},
	pullups: {	
		type: Number,
		required: true
	} 	
})

userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
		delete returnedObject.passwordHash
	  }
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports =User