module.exports = (req, res, next) => {
  if (req.session && req.session.admin) {
    res.locals.email = req.session.admin?.email;
    // res.locals.isAuth = true;
  }
  next();
};
