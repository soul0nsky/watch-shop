module.exports = function checkAdmin(req, res, next) {
  if (req.session.admin) {
    next();
  } else {
    res.redirect('/');
  }
};
