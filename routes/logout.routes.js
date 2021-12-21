const express = require('express');

const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('user_sid');
      res.locals.email = null;
      return res.redirect('/');
    });
  });

module.exports = router;
