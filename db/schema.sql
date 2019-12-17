
CREATE TABLE burgers
(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false,
    createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
	PRIMARY KEY (id)
);