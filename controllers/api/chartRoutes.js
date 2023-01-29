const express = require("express");
const router = express.Router();
const moment = require("moment");
const Payments = require("../../models/paymentsDue");

router.get("/", (req, res) => {
    Payments.findAll()
        .then(payments => {
        let data = {};
        payments.forEach(payment => {
            let month = moment(payment.payment_date).format("MMMM");
            if (!data[month]) {
            data[month] = payment.amount;
            } else {
            data[month] += payment.amount;
            }
        });
        res.render("chart", { data });
        })
        .catch(err => console.log(err));
});

module.exports = router;