const db = require('../connection');

const getMenus = () => {
  return db.query(
    `
    SELECT menus.*, items.*
    FROM menus
    JOIN items ON menus.id = items.menu_id
    `
    )
    .then(data => {
      return data.rows
    });
};

module.exports = { getMenus };
