const express = require('express');
const router = express.Router();
const State = require('../db/models/State');

router.get('/', (req, res) => {
  return State
    .fetchAll()
    .then(states => {
      res.json(states);
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
})

module.exports = router;