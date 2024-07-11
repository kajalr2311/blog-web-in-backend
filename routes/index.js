var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'this is home page' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'user about' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'user contact' });
});


router.get('/login', function(req, res, next) {
  res.render('login', { title: 'user login' });
});


router.get('/register', function(req, res, next) {
  res.render('register', { title: 'user register' });
});


module.exports = router;
