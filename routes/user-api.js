const express = require('express');
const router  = express.Router();
const menuQueries = require('../db/queries/menus')
const itemsByMenu = require ('../db/queries/items_by_menu')
const cartQueries = require('../db/queries/cart')



router.get('/menus/:id', (req, res) => {
  itemsByMenu.getItemsByMenu(req.params.id)
    .then(items => {
      res.json({ items });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/menus', (req, res) => {
  menuQueries.getMenus()
    .then(menus => {
      res.json({ menus });
    })
})
router.get('/cart', (req, res) => {

  cartQueries.getCart()
    .then(items => {
      res.json({ items });
    })

    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
