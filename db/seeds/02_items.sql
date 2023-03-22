-- Cocktails
INSERT INTO items (menu_id, title, details, price_cents, active) VALUES
  (1, 'Hibiscus Rum Punch', 'Dark rum, hibiscus tea, orange juice, lime juice, honey, club soda', 1800, true),
  (1, 'Blood Orange Margarita', 'Tequila, blood orange juice, lime juice, triple sec, agave nectar', 1600, true),
  (1, 'Smoky Maple Bourbon Sour', 'Bourbon, maple syrup, lemon juice, smoked sea salt', 1600, true),
  (1, 'Cucumber Mint Gin Fizz', 'Gin, cucumber, mint, lime juice, simple syrup, soda water', 1500, true),
  (1, 'Martini', 'Vodka, vermouth, olive', 1400, true),
  (1, 'Old Fashioned', 'Bourbon, sugar, bitters', 1500, true),
  (1, 'Margarita', 'Tequila, lime, triple sec, agave nectar', 1400, true);

  -- Appetizers
INSERT INTO items (menu_id, title, details, price_cents, active) VALUES
  (2, 'Gourmet Charcuterie Board', 'A selection of premium meats, cheeses, fruits, nuts, and crackers', 2800, true),
  (2, 'Spicy Tuna Tartare', 'Fresh tuna, avocado, and spicy mayo, served with wonton chips', 1600, true),
  (2, 'Baked Brie', 'Warm brie cheese topped with honey, served with a side og red pepper jelly and crostinis', 1600, true),
  (2, 'Crab Cakes', 'Pan-seared crab cakes with remoulade sauce', 1600, true),
  (2, 'Fried Calamari', 'Crispy calamari with tzatziki', 1500, true),
  (2, 'Crispy Brussels Sprouts', 'Crispy fried Brussels sprouts with bacon, balsamic glaze, and parmesan cheese', 1200, true),
  (2, 'Truffle Fries', 'Crispy shoestring fries tossed in truffle oil, parmesan cheese, and fresh herbs', 1000, true);


-- Salads
INSERT INTO items (menu_id, title, details, price_cents, active) VALUES
  (3, 'Asian Noodle Salad', 'Mixed greens, soba noodles, shredded carrots, red cabbage, scallions, edamame, and sesame ginger dressing', 1700, true),
  (3, 'Grilled Peach and Burrata Salad', 'Mixed greens, grilled peaches, creamy burrata cheese, prosciutto, and a honey balsamic dressing', 1900, true),
  (3, 'Southwest Salad', 'Mixed greens, grilled chicken, black beans, corn, avocado, cheddar cheese, and chipotle ranch dressing', 1900, true),
  (3, 'Mediterranean Salad', 'Mixed greens, cherry tomatoes, cucumbers, kalamata olives, feta cheese, and a lemon herb dressing', 1500, true),
  (3, 'Spinach and Strawberry Salad', 'Fresh spinach, sliced strawberries, candied pecans, and goat cheese, with a balsamic vinaigrette', 1200, true),
  (3, 'Caesar Salad', 'Romaine lettuce, croutons, parmesan cheese, with a classic Caesar dressing', 1200, true);


-- Mains
INSERT INTO items (menu_id, title, details, price_cents, active) VALUES
  (4, 'Filet Mignon', '8 oz. grilled filet with mashed potatoes and asparagus', 3500, true),
  (4, 'Lemon Herb Roasted Chicken', 'Roasted chicken with lemon, garlic, and herbs, served with roasted potatoes and vegetables', 2800, true),
  (4, 'Seared Scallops with Risotto', 'Pan-seared scallops served over creamy parmesan risotto', 3200, true),
  (4, 'Butternut Squash Ravioli', 'Homemade ravioli filled with roasted butternut squash and ricotta cheese, served with a sage butter sauce and toasted pine nuts', 2200, true),
  (4, 'Salmon', 'Pan-seared salmon with wild rice and green beans', 2900, true),
  (4, 'Vegetable Stir Fry', 'Assorted vegetables stir fried with tofu and served over rice', 2500, true),
  (4, 'Burger', '8 oz. beef patty with cheddar cheese, lettuce, tomato, house secret sauce and fries', 1800, true);

  -- Desserts
INSERT INTO items (menu_id, title, details, price_cents, active) VALUES
  (5, 'Banana Bread Pudding', 'Warm and comforting bread pudding made with banana bread, caramel sauce, and vanilla ice cream', 1100, true),
  (5, 'Crème Brûlée', 'Silky vanilla custard with a caramelized sugar crust', 1000, true),
  (5, 'New York Cheesecake', 'Creamy and rich cheesecake made with a graham cracker crust and served with raspberry sauce', 1200, true),
  (5, 'Tiramisu', 'Classic Italian dessert made with ladyfingers soaked in coffee and layered with mascarpone cheese and cocoa powder', 1300, true),
  (5, 'Chocolate Lava Cake', 'Warm and gooey chocolate cake with a molten chocolate center, served with vanilla ice cream', 1200, true);



-- INSERT INTO items (menu_id, title, details, price_cents, active) VALUES (1, 'Burger', 'Delicious and not nutricious', 1500, true);

-- INSERT INTO items (menu_id, title, details, price_cents, active) VALUES (2, 'Salad', 'Nutricious not delicious', 1300, true);

-- INSERT INTO items (menu_id, title, details, price_cents, active) VALUES (2, 'Soup', 'Soup De Jour all jour', 1100, true);

-- INSERT INTO items (menu_id, title, details, price_cents, active) VALUES (1, 'Burrito', 'It is good and this is a long description to test the db and the styling cause resataurants may input this amount of detail for the order. It could be longer and longer and up until now even longer.', 2100, true);

-- INSERT INTO items (menu_id, title, details, price_cents, active) VALUES (3, 'Icecream', 'Served cold', 800, true);






