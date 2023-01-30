const express = require('express');
const router = express.Router();



router.get('/create_payment', (req, res) => {
  res.render('payment');
  console.log('TEST');
});



module.exports = router;


// const withAuth = require('../../utils/auth');

// const { async } = require('rxjs');
// const { Payments, User } = require ('../../models');


// router.get('/', async (req, res) => {
//   try {
//     const paymentData = await Payments.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     })
//     const payments = paymentData.map((payment)=> payment.get({plain: true}));
//     res.render('expenses', {
//       payments,
//      ?
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// router.post('/create_payment', withAuth, async (req, res) => {
//   try { 
//     const newPayment = await Payments.create({
//       ...req.body,
//       user_id: req.req.session.user_id,
//     });
//     res.status(200).json(newPayment);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
// router.delete('/:id', withAuth, async (req, res)=> {
//   try {
//     const paymentData = await Payments.destroy({
//       where: {
//         id:req.parms.id,
//         user_id: req.session.user_id,
//       },
//     });
//     if(!paymentData) {
//       res.status(404).json({ message: 'No payment found!'});
//       return;
//     }
//     res.status(200).json(paymentData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router; 