const express = require('express');
const router  = express.Router();
const menuQueries = require('../db/queries/menus')
const cartQueries = require('../db/queries/cart')


router.get('/menus', (req, res) => {
  menuQueries.getMenus()
    .then(items => {
      res.json({ items });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/cart', (req, res) => {

  cartQueries.getCart()
    .then(items => {
      console.log(items)
      res.json({ items });
    })

    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
