DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  table_number INTEGER NOT NULL,
  order_total_cents INTEGER NOT NULL,
  paid INTEGER DEFAULT 0,
  order_status VARCHAR(255) DEFAULT 'Ordered'
);
