const express = require('express');
const router = express.Router();
const expensesCtrl = require('../../controllers/api/expenses');

router.get('/expenses', expensesCtrl.getExpenses);

module.exports = router;