require('dotenv').config();
const express = require('express');
const axios = require('axios');

const Transaction = require('../models/Transaction');
const router = express.Router(); // open the router function

router.post('/add/transaction', (req, res) => {
	console.log('req.body', req.body);

	Transaction.create(req.body, (err, transaction) => {
		if (!transaction) {
			return res.status(400).json({
				error: 'Sorry, transaction does not exist.',
			});
		}
		return res.status(200).json({ data:transaction });
	});
});

// get data
router.get('/get/transaction', (req, res) => {
	console.log('req.query', req. query);
    const { tranId } = req.query;
    
Transaction.find({_id: tranId}, (err, transaction) => {
		if (!transaction) {
			return res.status(400).json({
				error: 'Sorry, transaction does not exist.',
			});
		}
		return res.status(200).json({ data: transaction });
	});
});
router.post('/delete/', (req, res) => {
	console.log('req.body', req.body);
    const { phone } = req.body;

Transaction.findOneAndDelete({phone: phone}, (err, transaction) => {
		if (!transaction) {
			return res.status(400).json({
				error: 'Sorry, transaction does not exist.',
			});
		}
		return res.status(200).json({ data: ' transaction removed' });
	});
});
router.post('/update/transaction', (req, res) => {
	console.log('req.body', req.body);
    const { phone, name } = req.body;

Transaction.findOne({phone: phone}, (err, transaction) => {
		if (!transaction) {
			return res.status(400).json({
				error: 'Sorry, transaction does not exist.',
			});
		}
        transaction.name = name;
		transaction.save().then((updatedUser) => {
			return res.status(200).json({ data: updatedUser });
		});
	});
});
module.exports = router;