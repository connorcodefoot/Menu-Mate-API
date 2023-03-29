-- Cocktails
INSERT INTO items (menu_id, title, details, price_cents, picture, active) VALUES
  (1, 'Hibiscus Rum Punch', 'Dark rum, hibiscus tea, orange juice, lime juice, honey, club soda', 1800, '/images/01_drinks/Hibiscus.png', true),
  (1, 'Blood Orange Margarita', 'Tequila, blood orange juice, lime juice, triple sec, agave nectar', 1600, '/images/01_drinks/BloodOrangeMarg.png',true),
  (1, 'Smoky Maple Bourbon Sour', 'Bourbon, maple syrup, lemon juice, smoked sea salt', 1600, '/images/01_drinks/BourbonSour.jpeg', true),
  (1, 'Cucumber Mint Gin Fizz', 'Gin, cucumber, mint, lime juice, simple syrup, soda water', 1500, '/images/01_drinks/CucumberMint.jpg', true),
  (1, 'Martini', 'Vodka, vermouth, olive', 1400, '/images/01_drinks/Martini.jpeg', true),
  (1, 'Old Fashioned', 'Bourbon, sugar, bitters', 1500, '/images/01_drinks/OldFashioned.jpeg', true),
  (1, 'Margarita', 'Tequila, lime, triple sec, agave nectar', 1400, '/images/01_drinks/Margarita.jpeg', true);

  -- Appetizers
INSERT INTO items (menu_id, title, details, price_cents, picture, active) VALUES
  (2, 'Gourmet Charcuterie Board', 'A selection of premium meats, cheeses, olives, nuts, and crackers', 2800, '/images/02_appies/CharcuterieBoard.jpg', true),
  (2, 'Spicy Tuna Tartare', 'Fresh tuna, avocado in a spicy mayo, topped with arugala', 1600, '/images/02_appies/TunaTartare.jpeg', true),
  (2, 'Baked Brie', 'Warm brie cheese topped with honey, served with a side of red pepper jelly and crostinis', 1600, '/images/02_appies/Baked Brie.jpeg', true),
  (2, 'Crab Cakes', 'Pan-seared crab cakes with remoulade sauce on the side', 1600, '/images/02_appies/CrabCakes.jpg', true),
  (2, 'Fried Calamari', 'Crispy calamari with tzatziki', 1500, '/images/02_appies/Calamari.jpeg', true),
  (2, 'Crispy Brussels Sprouts', 'Crispy fried Brussels sprouts with bacon, balsamic glaze, and lemon', 1200, '/images/02_appies/CrispyBrussels.jpeg', true),
  (2, 'Truffle Fries', 'Crispy shoestring fries tossed in truffle oil, parmesan cheese, and fresh herbs', 1000, '/images/02_appies/TruffleFries.jpeg', true);


-- Salads
INSERT INTO items (menu_id, title, details, price_cents, picture, active) VALUES
  (3, 'Asian Noodle Salad', 'Mixed greens, udon noodles, shredded carrots, red peppers, scallions, edamame, and sesame ginger dressing', 1700, '/images/03_salads/AsianNoodle.jpg', true),
  (3, 'Grilled Peach and Burrata Salad', 'Grilled peaches, creamy burrata cheese, prosciutto, topped with fresh basil and a honey balsamic dressing', 1900, '/images/03_salads/PeachBurrata.jpg', true),
  (3, 'Southwest Salad', 'Mixed greens, grilled chicken, black beans, corn, avocado, cheddar cheese, and chipotle ranch dressing', 1900, '/images/03_salads/Southwest.jpg', true),
  (3, 'Mediterranean Salad', 'Mixed greens, tomatoes, cucumbers, kalamata olives, red onion, feta cheese, and a lemon herb dressing', 1500, '/images/03_salads/Med.jpg', true),
  (3, 'Spinach and Strawberry Salad', 'Fresh spinach, sliced strawberries, toasted pine nuts, walnuts, and goat cheese, with a balsamic vinaigrette', 1200, '/images/03_salads/SpinachStraw.jpg', true),
  (3, 'Caesar Salad', 'Romaine lettuce, croutons, parmesan cheese, bacon, with a classic Caesar dressing', 1200, '/images/03_salads/Caesar.jpg', true);


-- Mains
INSERT INTO items (menu_id, title, details, price_cents, picture, active) VALUES
  (4, 'Filet Mignon', '8 oz. grilled filet with garlic mashed potatoes and asparagus', 3500, '/images/04_mains/Steak.jpg', true),
  (4, 'Lemon Herb Roasted Chicken', 'Roasted chicken with lemon, garlic, and herbs, served with a potato pavé and muchrooms', 2800, '/images/04_mains/Chicken.jpg', true),
  (4, 'Seared Scallops with Risotto', 'Pan-seared scallops served over creamy parmesan risotto', 3200, '/images/04_mains/Risotto.jpg', true),
  (4, 'Butternut Squash Ravioli', 'Homemade ravioli filled with roasted butternut squash and ricotta cheese, served with a sage butter sauce', 2200, '/images/04_mains/Ravioli.jpg', true),
  (4, 'Salmon', 'Pan-seared salmon with wild rice, green beans and a grilled lemon', 2900, '/images/04_mains/Salmon.jpg', true),
  (4, 'Vegetable Stir Fry', 'Assorted vegetables stir fried with tofu and served over rice', 2500, '/images/04_mains/VegStirfry.jpg', true),
  (4, 'Burger', '8 oz. beef patty with cheddar cheese, lettuce, tomato, house secret sauce and fries', 1800, '/images/04_mains/Burger.jpg', true);

  -- Desserts
INSERT INTO items (menu_id, title, details, price_cents, picture, active) VALUES
  (5, 'Banana Bread Pudding', 'Warm and comforting bread pudding made with banana bread, caramel sauce, topped with icing sugar', 1100, '/images/05_desserts/BreadPudding.jpg', true),
  (5, 'Crème Brûlée', 'Silky vanilla custard with a caramelized sugar crust', 1000, '/images/05_desserts/CremeBrulee.jpg', true),
  (5, 'New York Cheesecake', 'Creamy and rich cheesecake made with a graham cracker crust and a raspberry swirl', 1200, '/images/05_desserts/Cheesecake.jpg', true),
  (5, 'Tiramisu', 'Classic Italian dessert made with ladyfingers soaked in coffee and layered with mascarpone cheese and cocoa powder', 1300, '/images/05_desserts/Tiramisu.jpg', true),
  (5, 'Chocolate Lava Cake', 'Warm and gooey chocolate cake with a molten chocolate center, served with vanilla ice cream', 1200, '/images/05_desserts/LavaCake.jpg', true);






