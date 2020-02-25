DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department(
    id INTEGER auto_increment NOT NULL,
    dp_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE role(
    id INTEGER auto_increment NOT NULL, 
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(12,2),
    dp_id INTEGER NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee(  
    id INTEGER auto_increment NOT NULL, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL, 
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    PRIMARY KEY (id)
);

