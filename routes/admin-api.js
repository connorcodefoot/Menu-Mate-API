
const express = require('express');
const router  = express.Router();
const orderQueries = require('../db/queries/orders');
const itemQueries= require ('../db/queries/items_by_order')
const menuQueries = require('../db/queries/menus');

router.get('/orders', (req, res) => {
  orderQueries.getOrders()
    .then(data => {
      console.log(data)
      res.json({ data });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// Returns all menu items associated with an order
router.get('/orders/:id', (req, res) => {
  itemQueries.itemsByOrder(req.params.id)
    .then(items => {
      res.json({ items });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/new-menu', (req, res) => {

  menuQueries.newMenu(req.query)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.put('/new-item', (req, res) => {

  menuQueries.newItem(req.query)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
