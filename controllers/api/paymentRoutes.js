const router = require('express').Router();
const paymentDue= require('../../models/paymentsDue');
//need to change route so it is only the user that is logged in
router.get('/', (req, res) => {
  paymentDue.findAll().then((paymentData) => {
    res.json(paymentData);
  });
});
