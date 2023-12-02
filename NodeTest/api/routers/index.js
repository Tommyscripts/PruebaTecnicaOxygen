const router = require('express').Router()
const authRouter = require('./auth.router')
const userRouter = require('./users.router')

router.use('/auth', authRouter)
router.use('/users', userRouter)

module.exports = router