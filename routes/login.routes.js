const router = require('express').Router();
const { Admin } = require('../db/models/index');

router
  .get('/', (req, res) => {
    res.render('login', { admin: true });
  })
  .post('/', async (req, res) => {
    const { email } = req.body;

    const admin = await Admin.findOne({
      where: {
        email,
      },
      raw: true,
    });

    req.session.admin = {
      email: admin.email,
      id: admin.id,
    };

    if (admin) {
      return res.json({
        login: true,
      });
    }
    return res.json({
      login: false,
    });
  });

module.exports = router;
