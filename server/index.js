const express = require('express')
const app = express()
const users = require('./endpoints/users')

app.get('/', (req, res) => res.send('Server running...'))
app.post('/', function (req, res) {
  res.send('Got a POST request')
})

// Allow cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/users', users)


app.listen(3000, () => console.log('app listening on port 3000'))
