const express = require('express');
const router = express.Router();
const menuQueries = require('../db/queries/menus');
const itemsByMenu = require('../db/queries/items_by_menu');
const cartQueries = require('../db/queries/cart');
const orders = require('../db/queries/orders');
const itemQueries= require ('../db/queries/items_by_order')

router.get('/order-total/:id', (req, res) => {
  orders.orderTotal(req.params.id)
    .then(data => {
      console.log(res)
      res.json({ data });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.put('/orders/:id/paid', (req, res) => {
  orders.orderPaid(req.params.id)
    .then(items => {
      res.json({ items });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});



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
    });
});
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

router.post('/new-order-item', (req, res) => {

  orders.newOrderItem(req.query)
    .then(data => {
      console.log('data returned from query:', data)
      res.json(data)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

router.post('/new-order', (req, res) => {

  orders.newOrder(req.query)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

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



module.exports = router;
