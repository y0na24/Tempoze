const express = require('express')
const auth = require('../middleware/auth.middleware')
const Project = require('../models/Project')
const router = express.Router({ mergeParams: true })

router
  .route('/')
  .get(auth, async (req, res) => {
    try {
      const { userId } = req.query
      const list = await Project.find({
        userId,
      })
      res.send(list)
    } catch (e) {
      return res.status(500).json({
        message: 'На сервере произошла ошибка',
      })
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newProject = await Project.create({ ...req.body, userId: req.user._id })
      res.status(201).send(newProject)
    } catch (e) {
      return res.status(500).json({
        message: 'На сервере произошла ошибка',
      })
    }
  })

router.delete('/:projectId', auth, async (req, res) => {
  try {
    const { projectId } = req.params

    await Project.deleteOne({
      projectId,
    })

    return res.send(null)
  } catch (e) {
    console.log(e.message)
    return res.status(500).json({
      message: 'На сервере произошла ошибка',
    })
  }
})

module.exports = router
