const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./expensesRoutes');

router.use('/users', userRoutes);
router.use('/expenses', expensesRoutes);

module.exports = router;
