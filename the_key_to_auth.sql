USE the_key_to_auth;

CREATE TABLE users (
	id INT AUTO_INCREMENT,
    email VARCHAR(60) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);

SELECT * FROM users;

INSERT INTO users (email, password) VALUES ('test@test.com','$2b$12$VeJS8OsFyEb9wwSTWkvxTeREWV6AKqPCiTBCnjChiZIHr7DxUqeoq
');
CREATE USER 'auth_demo'@'localhost' IDENTIFIED WITH mysql_native_password BY 'auth_demo';
GRANT ALL PRIVILEGES ON the_key_to_auth.* TO 'auth_demo'@'localhost';
FLUSH PRIVILEGES;