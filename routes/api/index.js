const router = require('express').Router();
const userRoutes = require('./userRoutes');
const paymentRoutes = require('./paymentRoutes');

router.use('/users', userRoutes);
router.use('/pay', paymentRoutes);

module.exports = router;