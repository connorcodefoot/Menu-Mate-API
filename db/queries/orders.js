const db = require('../connection');

const getOrders = () => {
  return db.query(
    `
    SELECT
    orders.id AS orderID,
    orders.customer_name AS customer,
    orders.table_number AS table,
    order_items.id AS orderItemID,
    items.title AS item,
    items.price_cents AS itemPrice
    FROM orders
    JOIN order_items ON order_items.order_id = orders.id
    JOIN items ON items.id = order_items.item_id
    GROUP BY orderID, order_items.id, items.id
    `
    )
    .then(data => {
      return data.rows
    });
};

module.exports = { getOrders };
