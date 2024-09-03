const express = require('express');
const userRouter = require('./user-routes');

const router = express.Router();

router.use('/signup', userRouter);
router.use('/user', userRouter)

module.exports = router;