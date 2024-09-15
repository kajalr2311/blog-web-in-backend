const passport = require("passport")
const userSchema = require("../models/userSchema")

const localStrategy = require("passport-local");
const blogmodel = require("../models/blogmodel");
const imagekit = require("../utils/imagekit");

passport.use(new localStrategy(userSchema.authenticate()));


exports.homepage = function (req, res, next) {
  res.render("index");
};

exports.createBlog = async function (req, res, next) {
  let newBlog = new blogmodel({
    title: req.body.title,
    description: req.body.description,
    blogImage: req.body.blogImage,
    createdBy: req.body._id,
  })
  await newBlog.save();

  await req.user.blogs.push(newBlog._id)
  await req.user.save()
  res.redirect("/profile")
};

exports.signuppage = (req, res, next) => {
  const newUser = new userSchema({
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
  });

  userSchema.register(newUser, req.body.password).then((u) => {
    passport.authenticate("local")(req, res, () => {
      res.redirect("/login");
    });
  });
};

exports.signinpage = passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
});


exports.logout = function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/login');
  });
}

exports.uploadimg = async (req, res, next) => {

  try {
    // console.log(req.params.id);
    const user = await userSchema.findById(req.params.id)
    // console.log(user);
    // console.log(req.files);
    const { fileId, url, thumbnailUrl } = await imagekit.upload({
      file: req.files.avatar.data,
      fileName: req.files.avatar.name,
    });
    console.log(url);
    // console.log(user);
    user.profile = url
    await user.save();
    console.log(user);
    
    res.render("profile",{user})
  } catch (error) {
    console.log(error);
  }

}

