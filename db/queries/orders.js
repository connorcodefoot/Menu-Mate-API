const { restart } = require('nodemon');
const db = require('../connection');

const getOrders = () => {
  return db.query(
    `
    SELECT id, customer_name, table_number, order_total_cents, paid, order_status FROM orders ORDER BY id DESC
    `
  )
    .then(data => {
      return data
    });
};

const newOrder = (params) => {
  return db.query(
    `INSERT INTO orders (customer_name, table_number, order_total_cents)
    VALUES ($1::text, $2::integer, $3::integer)
    RETURNING id, order_total_cents;`,
    [params.customer_name, params.table_number, params.order_total_cents]
  )
    .then(data => {
      return data;
    })
    .catch((err) => { return 'error'; });
};

const newOrderItem = (params) => {
  return db.query(
    `INSERT INTO order_items (order_id, item_id) VALUES ($1::integer, $2::integer);`,
    [params.orderID, params.itemID]
  )
    .then(data => {
      return data;
    })
    .catch((err) => { return 'error'; });
};


const orderPaid = (id) => {

  console.log(id)

  return db.query(
    `UPDATE orders
    SET paid = 1
    WHERE id = ($1::integer);
    `,
    [id]
  )
  .then(data => {
    console.log('UPDATED')
    return data;
  })
  .catch((err) => { return 'error'; });
}


const orderTotal = (id) => {

  console.log(id)

  return db.query(
    `SELECT SUM(price_cents)
    FROM items
    JOIN order_items on items.id = order_items.item_id
    WHERE order_items.order_id = ($1::integer);
    `,
    [id]
  )
  .then(data => {
    return data;
  })
  .catch((err) => { return 'error'; });
}


module.exports = { getOrders, newOrder, newOrderItem, orderPaid, orderTotal };
