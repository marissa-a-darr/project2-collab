const Expenses = require('../../models/expenses');

const getExpenses = (req, res) => {
    Expenses.findAll()
    .then(expenses => {
        res.json(expenses);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving expenses."
        });
    });
};

module.exports = {
getExpenses
};