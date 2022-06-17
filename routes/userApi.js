require('dotenv').config();
const express = require('express');
const axios = require('axios');

const User = require('../models/User');
const router = express.Router(); // open the router function

router.post('/add/user', (req, res) => {
	console.log('req.body', req.body);

	User.create(req.body, (err, user) => {
		if (!user) {
			return res.status(400).json({
				error: 'Sorry, user does not exist.',
			});
		}
		return res.status(200).json({ data: user });
	});
});
router.post('/get/user', (req, res) => {
	console.log('req.body', req.body);
    const { phone } = req.body;
		

User.find({phone: phone}, (err, user) => {
		if (!user) {
			return res.status(400).json({
				error: 'Sorry, user does not exist.',
			});
		}
		return res.status(200).json({ data: user });
	});
});
router.post('/delete/user', (req, res) => {
	console.log('req.body', req.body);
    const { phone } = req.body;

User.findOneAndDelete({phone: phone}, (err, user) => {
		if (!user) {
			return res.status(400).json({
				error: 'Sorry, user does not exist.',
			});
		}
		return res.status(200).json({ data: ' user removed' });
	});
});
router.post('/get/users', (req, res) => {
	User.find({}, (err, users) => {
		if (!users) {
			return res.status(400).json({
				error: 'Sorry, users does not exist.',
			});
		}
		return res.status(200).json({ data: users });
	});
});
router.post('/update/user', (req, res) => {
	console.log('req.body', req.body);
    const { phone, name } = req.body;

User.findOne({phone: phone}, (err, user) => {
		if (!user) {
			return res.status(400).json({
				error: 'Sorry, user does not exist.',
			});
		}
        user.name = name;
		user.save().then((updatedUser) => {
			return res.status(200).json({ data: updatedUser });
		});
	});
});

module.exports = router;