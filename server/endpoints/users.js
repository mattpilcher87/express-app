const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/', function (req, res) {
  async function getUsers() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())

    res.send(users)
  }
  getUsers()
})

router.get('/:userId', function (req, res) {
  async function getUser() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      
    const user = users.find((user) => {
      return user.id.toString() === req.params.userId
    })
    res.send(user)
  }
  getUser()
})

module.exports = router
