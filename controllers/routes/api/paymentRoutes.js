const router = require('express').Router();
const { async } = require('rxjs');
const { Payments, User } = require ('../../../models');
const withAuth = require('../../../utils/auth');

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
    console.log('TESTTESTEST' + paymentData)
    console.log('TEST2----------------------------------------')
    
    const payments = paymentData.map((payment)=> payment.get({plain: true}));
    res.render('expenses', {
      payments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/', withAuth, async (req, res) => {
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
router.delete('/:id', withAuth, async (req, res)=> {
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