const requireAuth = (req, res, next) => {
  if (!req.session.user) {
    res.redirect("/login");
  } else if (req.session.user.accessed == false) {
    res.redirect("/user/newpassword");
  } else {
    next();
  }
};

module.exports = requireAuth;
