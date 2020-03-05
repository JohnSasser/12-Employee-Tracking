USE company_db;


INSERT INTO department(id, dp_name)
VALUES
(1,"Sales"),
(2,"Engineering"),
(3,"Accounting"),
(4,"Legal"),
(5,"Finance");

INSERT INTO role(id , title, salary)
VALUES
(1,'sales account manager',95),
(2,'Software Engineer',105),
(300,'CPA',125),
(4,'lawyer',245),
(5,'Software Engineering Manager',145);

INSERT INTO employee(id, first_name, last_name, role)
VALUES
(35 ,'John' ,'Sasser' ,'Sales', 1),
(45 ,'Tom' ,'Holland' ,'Marketing', 3),
(55 ,'Tom' ,'Riddle' ,'Engineer', 2),
(65 ,'Tom' ,'Hanks' ,'Lawyer', 4),
(75 ,'Tony' ,'Hawk' ,'CPA', 5);
