const db = require('../connection');

const itemsByOrder = (id) => {
  return db.query(
    `
    SELECT order_items.order_id, order_items.item_id, order_items.notes, order_items.order_item_status, items.title, items.price_cents, items.details
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
