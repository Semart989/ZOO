const express = require('express');
const { Rate } = require('../db/models/index');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const rate = await Rate.findAll();
    const { admin } = req.session;
    res.render('rates', { rate, admin });
  })
  .put(async (req, res) => {
    try {
      const { priceRate1, id } = req.body;
      await Rate.update({ priceRate: priceRate1 }, { where: { id } });
      res.json({ create: true, priceRate1, id });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
