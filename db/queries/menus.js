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

const newItem = (params) => {
  return db.query(
    `INSERT INTO items (id, menu_id, title, details, price_cents, picture)
    VALUES ($1::integer, $2::integer, $3::text, $4::text, $5::integer, $6::text)
    ON CONFLICT (id) DO
    UPDATE SET title = $3::text, details = $4::text, price_cents = $5::integer, picture = $6::text
    ;`,
    [params.id, params.menuID, params.title, params.details, params.price, params.picture]
  )
    .then(data => {
      return data;
    })
    .catch((err) => console.error(err));
};


module.exports = { getMenus, newMenu, newItem };
