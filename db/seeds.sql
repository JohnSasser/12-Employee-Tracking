USE company_db;


INSERT INTO department(id, dp_name)
VALUES(1, "Sales"),
(2, "Engineering"),
(3, "Accounting"),
(4, "Legal");

INSERT INTO role(id, title, salary, dp_id)
VALUES(20 ,'sales account manager',95 ,97651 ),
(30 ,'Software Engineer',105 ,97651 ),
(40 ,'CPA',125 ,97651 ),
(50 ,'law',245 ,97651 ),
(60 ,'Software Engineering Manager',145 ,97651 );

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(35 ,'John' ,'Sasser' ,97651 , 00700 ),
(45,'Tom' ,'Holland' ,97651 , 00763 ),
(55 ,'Tom' ,'Riddle' ,97651 , 00757 ),
(65 ,'Tom' ,'Hanks' ,97651 , 00777 ),
(75 ,'Tony' ,'Hawk' ,97651 , 00788 );
