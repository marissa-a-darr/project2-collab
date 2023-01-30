const express = require("express");
const moment = require("moment");
const Payments = require("../../models/paymentsDue");
const router = express.Router();

// Adding in Chart data
router.get("/bar", (req, res) => {
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
      res.render("chart", { chartData: JSON.stringify(data) });
    })
    .catch(err => console.log(err));
});

module.exports = router;

