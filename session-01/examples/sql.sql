CREATE TABLE client (
  email varchar(128) NOT NULL PRIMARY KEY,
  first_name varchar(20),
  last_name varchar(20),
  tel varchar(10)
);


SELECT email, first_name, last_name, tel FROM client;


