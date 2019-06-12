const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

const data = ['Hello', 'Hej', 'Hei']

app.use(bodyParser.json())
app.use(cors())
app.use(
    morgan(':method :url :status :response-time ms - :res[content-length] :body')
  )
morgan.token('body', (req, res) => JSON.stringify(req.body))

app.get('/api', (req, res) => res.send(data))

module.exports = app