const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(
    morgan(':method :url :status :response-time ms - :res[content-length] :body')
  )
morgan.token('body', (req, res) => JSON.stringify(req.body))

app.post('/login', (req, res) => {
  const username = req.body
  res.status(200).send({ username })
})

module.exports = app