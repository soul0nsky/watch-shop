const router = require('express').Router();
const checkAdmin = require('../miiddlewares/checkAdminMiddle');

router.get('/logout', checkAdmin, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.clearCookie('NewCookie');
    res.redirect('/');
  });
});

module.exports = router;
