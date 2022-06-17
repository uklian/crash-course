const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, 'Please add your name'],
	},
	phone: {
		type: String,
		required: [true, 'Please add a your phone number'],
	},
	receipt: {
		type: String,
	}},
 { timestamps : true }
	// createdAt: {
	// 	type: Date,
	// 	default: Date.now,
	// },
);

module.exports = mongoose.model('user', UserSchema);