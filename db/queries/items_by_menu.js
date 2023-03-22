const db = require('../connection');

const getItemsByMenu = (id) => {
  return db.query(
    `
    SELECT *
    FROM items
    WHERE menu_id = ${id}
    `
    )
    .then(data => {
      return data.rows
    });
};

module.exports = { getItemsByMenu };
