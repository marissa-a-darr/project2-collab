const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./expensesRoutes');
const chartRoutes = require('./expenses')

router.use('/users', userRoutes);
router.use('/expenses', projectRoutes);
router.use('/chart', chartRoutes);

module.exports = router;
