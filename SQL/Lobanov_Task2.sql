/* ##### TASK 1 ###### */

CREATE DATABASE IF NOT EXISTS employees_db;

USE employees_db;

CREATE TABLE IF NOT EXISTS employees (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	position VARCHAR(30) NOT NULL,
	salary INT unsigned NOT NULL
);

INSERT INTO employees (id, first_name, last_name, position, salary) VALUES ( null, 'Mark', 'Zuckerberg', 'front-end developer', 150000);
INSERT INTO employees (id, first_name, last_name, position, salary) VALUES ( null, 'Pavel','Durov', 'front-end developer', 125000);
INSERT INTO employees (id, first_name, last_name, position, salary) VALUES ( null, 'Ilya','Kozlov', 'desktop developer', 175000);
INSERT INTO employees (id, first_name, last_name, position, salary) VALUES ( null, 'Ivan','Erohin', 'full-stack developer', 350000);
INSERT INTO employees (id, first_name, last_name, position, salary) VALUES ( null, 'Vitaliy','Hikarev', 'back-end developer', 280000);
INSERT INTO employees (id, first_name, last_name, position, salary) VALUES ( null, 'Anton','Errorov', 'back-end developer', 28000);
INSERT INTO employees (id, first_name, last_name, position, salary) VALUES ( null, 'Mihail','Grachev', 'software quality assurance', 15000);
INSERT INTO employees (id, first_name, last_name, position, salary) VALUES ( null, 'Boris','Dyatlov', 'software quality assurance', 27000);
	

/* ##### TASK 2 ###### */

SELECT * FROM employees_db.employees WHERE salary < 30000;
SELECT * FROM employees_db.employees WHERE salary < 30000 and position = 'software quality assurance';

/* ##### TASK 3 ###### */

CREATE TABLE IF NOT EXISTS subordination (	
	head_ID INT UNSIGNED NOT NULL,
	sub_ID INT UNSIGNED NOT NULL
);

INSERT INTO employees_db.subordination (head_ID, sub_ID) VALUES ( 2, 7);
INSERT INTO employees_db.subordination (head_ID, sub_ID) VALUES ( 1, 2);
INSERT INTO employees_db.subordination (head_ID, sub_ID) VALUES ( 1, 3);
INSERT INTO employees_db.subordination (head_ID, sub_ID) VALUES ( 1, 4);
INSERT INTO employees_db.subordination (head_ID, sub_ID) VALUES ( 1, 5);
INSERT INTO employees_db.subordination (head_ID, sub_ID) VALUES ( 2, 6);
INSERT INTO employees_db.subordination (head_ID, sub_ID) VALUES ( 2, 3);
INSERT INTO employees_db.subordination (head_ID, sub_ID) VALUES ( 2, 4);


SELECT employees.first_name, employees.last_name, employees.position, employees.salary
FROM employees JOIN subordination WHERE employees.id=sub_ID AND head_ID = 1;
