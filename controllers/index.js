const router = require('express').Router();
const apiRoutes = require('../routes/api/index');
const homeRoutes = require('../routes/homeRoutes');

router.use('/', homeRoutes);
router.use('/login', apiRoutes);

module.exports = router;
