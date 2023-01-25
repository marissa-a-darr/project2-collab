const express = require('express');
const router = express.Router();
const moment = require('moment');
const Payments = require('../../models/paymentsDue');


router.get('/chart', (req, res) => {
    Payments.findAll().then(Payments => {
        const data = Payments.map(expense => ({ payment_date: moment(expense.createdAt).format('MMMM'), amount: expense.amount }));
        res.render('chart', { data });
    });
});
module.exports = router;



























// const Expenses = require('../../models/expenses');

// const getExpenses = (req, res) => {
//     Expenses.findAll()
//     .then(expenses => {
//         res.json(expenses);
//     })
//     .catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving expenses."
//         });
//     });
// };

// module.exports = {
// getExpenses
// };