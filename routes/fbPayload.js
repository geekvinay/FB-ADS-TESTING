const express = require('express')
const router = express.Router()
const token = process.env.VERIFY_TOKEN || '34bA9f2nC7dE'

router.get('/', (req, res) => {
  try {
    console.log('got req for facebook ads verification')

    const mode = req.query['hub.mode']
    const challenge = req.query['hub.challenge']
    const verifyToken = req.query['hub.verify_token']

    // set the verify token in environment variables ====> How do we do it here
    if (mode && verifyToken === token) {
      logger.log('successfully connected to fb ads')
      res.status(200).send(challenge)
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    console.log(new Error(err))
  }
})

router.post('/', (req, res) => {
  try {
    console.log('got hit on facebook ads webhook')
    console.log(req.body)

    res.sendStatus(200)
  } catch (err) {
    console.log(new Error(err))
  }
})

module.exports = router
