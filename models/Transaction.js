const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
	{
		customer: {
			phone: { type: String, required: true },
			name: { type: String, required: true },
		},
		product: {
			type: String,
			required: true,
		},
		receipt: {
			invoiceNo: { type: String },
			receiptKey: { type: String },
			amount: { type: Number },
			receiptDate: { type: Date },
			status: { type: String },
		},
		reason: { type: String },
	},
	{
		timestamps: true,
	}
);

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;