const express = require('express')
const app = express()
const users = require('./endpoints/users')

app.get('/', (req, res) => res.send('Hello World'))
app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.use('/users', users)


app.listen(3000, () => console.log('app listening on port 3000'))
