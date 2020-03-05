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
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employee(  
    id INTEGER PRIMARY KEY auto_increment NOT NULL, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL, 
    role VARCHAR(30),
    role_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INTEGER
);