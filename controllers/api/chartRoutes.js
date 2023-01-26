const express = require('express');
const router = express.Router();
const moment = require('moment');
const Payments = require('../../models/paymentsDue');


router.get('/chart', (req, res) => {
    Payments.findAll().then(Payments => {
        const data = Payments.map(Payments => ({ month: moment(Payments.createdAt).format('MMMM'), amount: Payments.amount }));
        res.render('chart', { data });
    });
});
module.exports = router;

