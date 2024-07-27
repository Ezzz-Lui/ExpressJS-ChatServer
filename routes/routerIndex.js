const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Test routing with express')
})

module.exports = router