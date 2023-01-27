const userRoutes = require ("./userRoutes");
const paymentRoutes = require ("./paymentRoutes");
const router = require ("express").Router();

router.use("/users", userRoutes); 
router.use("/payments", paymentRoutes); 



module.exports = router; 