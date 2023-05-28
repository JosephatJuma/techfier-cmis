const requireAuth = (req, res, next) => {
  if (!req.session.user) {
    res.redirect("/login");
  }
  if (req.session.user.accessed === false) {
    res.redirect("/user/newpassword");
  }
  next();
};

module.exports = requireAuth;
