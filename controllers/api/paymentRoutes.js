const express = require('express');
const router = express.Router();
const paymentDue = require('../../models/paymentsDue');
const { async } = require('rxjs');
const { Payments, User } = require ('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  try {
    const paymentData = await Payments.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    })
    const payments = paymentData.map((payment)=> payment.get({plain: true}));
    res.render('', {
      payments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('create_payment', withAuth, async (req, res)=> {
  res.render('expenses')
})
//MARISSA REVISIT ONCE DATABASE IS WORKING
router.post('/create_payment', withAuth, async (req, res) => {
  try { 
    const newPayment = await Payments.create({
      ...req.body,
      user_id: req.req.session.user_id,
    });
    res.status(200).json(newPayment);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.delete('/delete/:id', withAuth, async (req, res)=> {
  try {
    const paymentData = await Payments.destroy({
      where: {
        id:req.parms.id,
        user_id: req.session.user_id,
      },
    });
    if(!paymentData) {
      res.status(404).json({ message: 'No payment found!'});
      return;
    }
    res.status(200).json(paymentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router; 
