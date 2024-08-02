const express = require('express');
let router = express.Router();

router.get("/bfhl", (req, res) => {
	res.status(200).json({ "operation_code": 1 });
});

router.post("/bfhl", (req, res) => {
	let data = req.body.data;
	let numbers = [];
	let alphabets = [];
	let highestAlphabet = '';

	data.forEach(item => {
		if (!isNaN(item)) {
			numbers.push(item);
		} else if (typeof item === 'string' && item.length === 1 && /[a-zA-Z]/.test(item)) {
			alphabets.push(item);
			if (highestAlphabet === '' || item.toLowerCase() > highestAlphabet.toLowerCase()) {
				highestAlphabet = item;
			}
		}
	});

	let response = {
		"is_success": true,
		"user_id": "john_doe_17091999",
		"email": "john@xyz.com",
		"roll_number": "ABCD123",
		"numbers": numbers,
		"alphabets": alphabets,
		"highest_alphabet": highestAlphabet ? [highestAlphabet] : []
	};

	res.json(response);
});

module.exports = router;