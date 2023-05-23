const express = require('express')
const app = express()
const port = process.env.PORT || 4040
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Routes
const csvParserRouter = require('./routes/test-webhook')
const fbPayload = require('./routes/fbPayload')

app.use(csvParserRouter)
app.use('/webhook', fbPayload)

app.get('/', (req, res) => {
  res.send('Connected to the backend')
})

app.listen(port, () => {
  console.log(`Listening on endpoint ${port}`)
})
