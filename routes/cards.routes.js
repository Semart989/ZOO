const express = require('express');
const { Animal } = require('../db/models/index');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    // if (!req.session.isAuth) {
    //   res.redirect('/');
    // }
    const animals = await Animal.findAll({ });
    res.render('cards', { animals });
  });
