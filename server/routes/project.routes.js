const express = require('express')
const auth = require('../middleware/auth.middleware')
const Project = require('../models/Project')
const router = express.Router({ mergeParams: true })

// /api/comment
router
  .route('/')
  .get(auth, async (req, res) => {
    try {
      const list = await Project.find()
      res.send(list)
    } catch (e) {
      return res.status(500).json({
        message: 'На сервере произошла ошибка',
      })
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newProject = await Project.create({
        ...req.body,
        userId: req.user._id,
      })
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
    const removedProject = await Project.findById(projectId)

    if (removedProject.userId.toString() === req.user._id) {
      await removedProject.remove()
      return res.send(null)
    } else {
      return res.status(401).json({ message: 'Unauthorized' })
    }
  } catch (e) {
    return res.status(500).json({
      message: 'На сервере произошла ошибка',
    })
  }
})

module.exports = router
