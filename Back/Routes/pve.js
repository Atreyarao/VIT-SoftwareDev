const { json } = require('body-parser')
const express = require('express')
const Route = express.Router()
const data = require('../Database/data.json')
data = JSON.parse(data)

Route.post('/api/Selection', (req, res) => {
  const { ballAgressive, batAggresive } = req.body
  const ballArray = data.Balls
  const ballSelect = Math.floor(Math.random() * ballArray.length - 1)
  const { type, Modifiers } = ballArray[ballSelect]
  if (ballAgressive) {
    Modifiers = (120 * Modifiers) / 100
  }
  const possible = data.shotPossible
  const shots = data.Shots
  const shotAvailable = possible[type]
  var resArray = []
  for (var i = 0; i < shotAvailable.length; i++) {
    resArray.push(shots[shotAvailable[i]])
  }
  res.json({ Result: resArray })
})
