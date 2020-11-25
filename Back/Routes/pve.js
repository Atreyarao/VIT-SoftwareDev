const { json } = require('body-parser')
const express = require('express')
const Route = express.Router()
const data = require('../Database/data.json')
//data = JSON.parse(data)
var ball = 0
var totalRuns = 0
var LastBall = 0
Route.post('/Selection', (req, res) => {
  const { ballAgressive, batAggresive } = req.body
  const ballArray = data.Balls
  var ballSelect = Math.floor(Math.random() * ballArray.length - 1)
  if (ballSelect < 0) ballSelect *= -1
  var { type, Modifiers } = ballArray[ballSelect]

  if (ballAgressive) {
    if (type === 'Full toss' || type === 'Yoker' || type === 'In-swinger') {
      Modifiers *= 1.2
    }
  } else {
    if (
      type === 'Out-swinger' ||
      type === 'Bouncer' ||
      type === 'Slower Ball'
    ) {
      Modifiers *= 1.2
    }
  }

  const possible = data.shotPossible
  const shots = data.Shots
  const shotAvailable = possible[type]
  var resArray = []
  for (var i = 0; i < shotAvailable.length; i++) {
    var obj = shots[shotAvailable[i]]
    var batModifier = obj.Modifiers
    var run = obj.runs
    if (batAggresive) {
      if (run === 4 || run == 6) batModifier *= 1.2
    } else {
      if (run === 0 || run === 1 || run === 2) batModifier *= 1.2
    }
    obj.NewModifiers = batModifier
    var prob = ((batModifier - Modifiers) * 100) / batModifier
    obj.probability = prob
    resArray.push(obj)
  }
  res.json({ BallType: type, Result: resArray })
})

Route.post('/hit', (req, res) => {
  const { runs, probability } = req.body

  if (probability < 20) {
    res.json({ Result: 'Missed' })
    return
  }
  ball++;
  if (ball > 6) {
    res.json({ Result: 'Over Complete!' })
    return
  }
  totalRuns += parseInt(runs);
  if (ball === 0) {
    res.json({ CurrentBall: runs, TotalRuns: totalRuns,NumberOfBallsPlayed:ball })
    LastBall = runs
    return
  }
  res.json({ CurrentBall: runs, TotalRuns: totalRuns, LastBall,NumberOfBallsPlayed:ball })
  LastBall = runs
  return
})

module.exports = Route
