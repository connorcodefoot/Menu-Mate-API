const db = require('../connection');

const itemsByOrder = (id) => {
  return db.query(
    `
    SELECT order_items.order_id, order_items.item_id, items.title, items.price_cents
    FROM order_items
    JOIN items on items.id = order_items.item_id
    WHERE order_id = ${id}
    `
    )
    .then(data => {
      return data.rows
    });
};

module.exports = { itemsByOrder };
