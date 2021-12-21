const express = require('express');
const { Animal } = require('../db/models/index');

const router = express.Router();

router.route('/:id')
  .get((req, res) => {
    if (!req.session.admin) {
      res.redirect('/login');
    }
    res.render('edit', { id: req.params.id });
  })
  .put(async (req, res) => {
    try {
      const { name, description, pics } = req.body;
      const edit = await Animal.findOne({ where: { id: req.params.id } });
      edit.name = name;
      edit.description = description;
      edit.pics = pics;
      edit.save();
    } catch (error) {
      console.error(error);

      return res.status(401).json({ edited: false });
    }
    return res.json({ edited: true });
  });

module.exports = router;
