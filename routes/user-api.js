const express = require('express');
const router  = express.Router();
const menuQueries = require('../db/queries/menus')

router.get('/menus', (req, res) => {
  menuQueries.getMenus()
    .then(menus => {
      res.json({ menus });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;