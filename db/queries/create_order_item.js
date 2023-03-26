const { restart } = require('nodemon');
const db = require('../connection');

const newOrderItem = (params) => {
  return db.query(
    `INSERT INTO order_items (order_id, , item_id)
    VALUES ($1::integer, $2::integer)`
    [params.order_id, params.item_id]
  )
  .then(data => {
    return data
  })
  .catch((err) => {return 'error'});

}

module.exports = { newOrderItem};
