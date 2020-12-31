const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const address = require('address')
const app = express()
const PORT = process.env.PORT || 5000



app.use(bodyParser.json())

app.use(cors({ origin: true }))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/api/whoami', (req, res) => {
    res.json({
      ipaddress: address.ip(),
      software: req.headers['user-agent'],
      language: req.headers['accept-language']
    })
})

app.all('*', (req, res) => {
  res.json('Page not found')
})

app.listen(PORT, console.log('App started on PORT: '+ PORT + '...'))