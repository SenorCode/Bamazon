CREATE DATABASE bamazon;
USE bamazon;

DROP TABLE IF EXISTS products;

CREATE TABLE products (PRIMARY KEY(itemID), itemID INTEGER(5) AUTO_INCREMENT NOT NULL, product_name VARCHAR(50), department_name VARCHAR(100), price FLOAT(10),stock_quantity INTEGER(5));

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pokemon Card Game', 'Games', 14.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('iPhone 8', 'Electronics', 859.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Playstation 4', 'Games', 399.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Xbox One', 'Games', 411.99, 24);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('X-Men Apocalype', 'Movies', 44.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('PS4 Controller (RED)', 'Games', 49.95, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Camping Pillow', 'Outdoors Stuff', 16.50, 280);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Fishinig Pole', 'Outdoors Stuff', 35.50, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pokemon The Movie', 'Movies', 96.32, 6);


SELECT * FROM products;