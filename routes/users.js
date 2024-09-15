var express = require('express');
const {homepage , signuppage, signinpage , logout, createBlog, uploadimg } = require('../controllers/userController');
const { isLoggedIn } = require('../utils/middleware.js');
var router = express.Router();

/* GET users listing. */
router.get('/', homepage );

router.post("/register", signuppage );

router.post("/login", signinpage);

router.get("/logout",logout);

router.post("/createBlog",isLoggedIn ,createBlog);

router.post("/uploadimg/:id" ,isLoggedIn ,uploadimg)




module.exports = router;
