const { restart } = require('nodemon');
const db = require('../connection');

const getOrders = () => {
  return db.query(
    `
    SELECT * FROM orders
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
    RETURNING id;`,
    [params.customer_name, params.table_number, params.order_total_cents]
  )
    .then(data => {
      return data;
    })
    .catch((err) => { return 'error'; });
};

const newOrderItem = (params) => {
  console.log('sql attempted')
  console.log(params.orderID,params.itemID)
  return db.query(
    `INSERT INTO order_items (order_id, item_id) VALUES ($1::integer, $2::integer);`,
    [params.orderID, params.itemID]
  )
    .then(data => {
      console.log('inserted into DB')
      return data;
    })
    .catch((err) => { return 'error'; });
};

module.exports = { getOrders, newOrder, newOrderItem };
