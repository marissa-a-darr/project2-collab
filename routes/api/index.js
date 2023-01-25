const userRoutes = require ('./userRoutes');
const paymentRoutes = require ('./paymentRoutes');
const expensesRoutes = require('./expenses')
const router = require('express').Router();

router.use('/users', userRoutes);
router.use('/payments', paymentRoutes);
router.use('/expenses', expensesRoutes);

module.exports = router;