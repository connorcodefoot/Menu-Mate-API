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
    `INSERT INTO order_items (order_id, item_id, notes) VALUES ($1::integer, $2::integer, $3::text);`,
    [params.orderID, params.itemID, params.notes]
  )
    .then(data => {
      return data;
    })
    .catch((err) => { return 'error'; });
};


const orderPaid = (id) => {

  return db.query(
    `UPDATE orders
    SET paid = 1
    WHERE id = ($1::integer);
    `,
    [id]
  )
  .then(data => {
    return data;
  })
  .catch((err) => { return 'error'; });
}


const orderTotal = (id) => {

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

const updateOrderTotal = (id, total) => {

  return db.query(
    `UPDATE orders
    SET order_total_cents = ($1::integer)
    WHERE id = ($2::integer);
    `,
    [total, id]
  )
  .then(data => {
    console.log(data)
  })
  .catch((err) => { return 'error'; });
}


const updateOrderStatus = (params) => {

  console.log(params)

  return db.query(
    `UPDATE orders
    SET order_status = ($1::text)
    WHERE id = ($2::integer);
    `,
    [params.orderStatus, params.id]
  )
  .then(data => {
    console.log(data)
  })
  .catch((err) => { return 'error'; });
}



module.exports = { getOrders, newOrder, newOrderItem, orderPaid, orderTotal, updateOrderTotal, updateOrderStatus };
