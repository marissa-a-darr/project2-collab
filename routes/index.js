const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;

//TO DO: Finish user routes. write utils so pages must be seen only when logged in, write payment routes
