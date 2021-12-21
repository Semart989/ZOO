const express = require('express');
const { Animal } = require('../db/models/index');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const { admin } = req.session;
    const animals = await Animal.findAll({ });
    res.render('animals', { animals, admin });
  })
  .delete(async (req, res) => {
    try {
      const { animalId } = req.body;
      // eslint-disable-next-line no-unused-vars
      const deleted = await Animal.destroy({ where: { id: animalId } });
    } catch (error) {
      return res.status(401).json({ deleted: false });
    }
    return res.json({ deleted: true });
  })
  .post(async (req, res) => {
    try {
      const { name, description, pics } = req.body;

      await Animal.create({
        name,
        description,
        pics,
      });
    } catch (error) {
      return res.status(401).json({ created: false });
    }
    return res.json({ created: true });
  });

module.exports = router;
