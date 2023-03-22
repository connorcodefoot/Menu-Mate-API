const db = require('../connection');

const getMenus = () => {
  return db.query(

    `
    SELECT * FROM menus
    `

    )
    .then(data => {
      return data.rows
    });
};

module.exports = { getMenus };
