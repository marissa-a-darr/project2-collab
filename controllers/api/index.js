const router = require('express').Router();
const userRoutes = require('../routes/api/userRoutes');
const paymentRoutes = require('../routes/api/paymentRoutes');
const chartRoutes = require('../routes/api/chartRoutes')

router.use('/users', userRoutes);
router.use('/expenses', paymentRoutes);
router.use('/chart', chartRoutes);

module.exports = router;
