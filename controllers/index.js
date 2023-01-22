const router = require('express').Router();

// const apiRoutes = require('./api');
//const homeRoutes = require('./homeRoutes'); //

// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

const apiRoutes = require('../controllers/api/userRoutes');
const homeRoutes = require('./api/homeRoutes');

router.use('/', homeRoutes);
router.use('/login', apiRoutes);

module.exports = router;
