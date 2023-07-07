const express = require('express')
const router = express.Router({ mergeParams: true })

//api/auth
router.use('/auth', require('./auth.routes'))
router.use('/project', require('./project.routes'))

module.exports = router
