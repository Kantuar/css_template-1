// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

router.get('/selector', function (req, res) {
  res.render('selector', {})
})

// ================================================================

router.get('/', function (req, res) {
  res.render('index', {})
  layout: 'selector'
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
