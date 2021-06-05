var express = require('express')
var router = express.Router()
var sumFunction = require('../src/sum')

/* GET home page. */
router.get('/', function (req, res) {
  // res.render('index', { title: 'Express' });
  const result = sumFunction('12', '28')
  res.status(200).json({ result, type: typeof result })
})

module.exports = router
