const router = require('express').Router();

const apiRoutes = require('../controllers/api/userRoutes');
const homeRoutes = require('./api/homeRoutes');

router.use('/', homeRoutes);
router.use('/login', apiRoutes);

module.exports = router;
