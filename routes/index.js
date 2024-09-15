var express = require('express');
const { isLoggedIn } = require('../utils/middleware.js');
const UserCollection = require('../models/userSchema');
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

router.get('/details/:id', function(req, res, next) {
  res.render('details', { title: 'user details' });
});


router.get('/createblog', function(req, res, next) {
  res.render('createblog', { title: 'user blog' });
});

router.get("/profile",isLoggedIn, async function(req, res, next) {
  const user = await UserCollection.findById(req.user._id).populate("blogs")
  res.render('profile',{ user});
});


module.exports = router;
