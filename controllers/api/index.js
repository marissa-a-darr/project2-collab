const router = require('express').Router();
const userRoutes = require('./userRoutes');
const paymentRoutes = require('./paymentRoutes');
const chartRoutes = require('./chartRoutes');

router.use('/users', userRoutes);
router.use('/payments', paymentRoutes);
router.use('/chart', chartRoutes);

module.exports = router;
