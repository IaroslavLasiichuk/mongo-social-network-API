const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const thougthRoutes = require('./thougthRoutes');

router.use('/users', userRoutes);
// router.use('/thougths', thougthRoutes);

module.exports = router;