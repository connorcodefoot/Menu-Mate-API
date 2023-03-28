const db = require('../connection');

const getMenus = () => {
  return db.query(

    `
    SELECT * FROM menus
    `

  )
    .then(data => {
      return data.rows;
    });
};

const newMenu = (params) => {
  return db.query(
    `INSERT INTO menus(title)
    VALUES ($1::text)
    RETURNING id;`,
    [params.title]
  )
    .then(data => {
      return data;
    })
    .catch((err) => { return 'error'; });
};


module.exports = { getMenus, newMenu };
