const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const csvParser = require('../utility/csv-parse')

const csvStorage = multer.diskStorage({
  destination: 'test',
  filename: (req, file, cb) => {
    console.log('uploading a new csv file')
    cb(
      null,
      file.fieldname + '_' + Date.now() + path.extname(file.originalname)
    )
  }
})

const csvUpload = multer({ storage: csvStorage })

// router.get('/fb-webhook', communicationManager.fbADsVerify)
// router.post('/fb-webhook', communicationManager.fbADsWebhook)


router.get('/csv-parser', (req, res) => {
  console.log(req.body)
  res.send('Hello')
})

router.post('/csv-parser', csvUpload.single('dataCSV'), (req, res) => {
  console.log(req.file.path)
  csvParser(req.file.path)
  res.send(`Posting on csv-parse route : ${req.file.originalname} `)
})

module.exports = router
