const db = require('../connection');

const getCart = () => {
  return db.query(
    `SELECT * FROM items`,
  )
    .then(data => {
      return data.rows;
    });
};

module.exports = { getCart };
