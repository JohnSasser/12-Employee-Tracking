USE company_db;

INSERT INTO department(id, dp_name)
VALUES(1, Sales);

INSERT INTO role(id, title, salary, dp_id)
VALUES(2 ,sales account manager,95 ,97651 );

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(3 ,John ,Sasser ,97651 , 00700 );
