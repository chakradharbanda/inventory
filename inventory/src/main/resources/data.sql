CREATE TABLE IF NOT EXISTS PRODUCT (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price DOUBLE NOT NULL,
    quantity INT NOT NULL
);

INSERT INTO PRODUCT (name, description, price, quantity) VALUES ('Product 1', 'Description 1', 10.0, 100);
INSERT INTO PRODUCT (name, description, price, quantity) VALUES ('Product 2', 'Description 2', 20.0, 200);
