CREATE TABLE employees(
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
photo varchar(100) DEFAULT 'saknas',
fname varchar(100) NOT NULL,
lname varchar(100) NOT NULL,
position varchar(100) NOT NULL,
info text NOT NULL,
salary INTEGER NOT NULL,
jobphone varchar(100) NOT NULL,
jobmail varchar(100) NOT NULL
);

INSERT INTO employees(photo, fname, lname, position, info, salary, jobphone, jobmail) VALUES('gordon.jpg', 'Gordon', 'Ramsay', 'Chefskock', 'Har över 30 års arbetslivserfarenhet inom matlagning', 30000, '08-435 76 34', 'gordon@bonzis.se');

INSERT INTO employees(photo, fname, lname, position, info, salary, jobphone, jobmail) VALUES('jamie.jpg', 'Jamie', 'Oliver', 'Chefskock', 'Har över 20 års arbetslivserfarenhet inom matlagning', 31000, '08-435 76 30', 'jamie@bonzis.se');

CREATE TABLE users(
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
fname varchar(100) NOT NULL,
lname varchar(100) NOT NULL,
email varchar(100) NOT NULL,
username varchar(100) NOT NULL,
password text NOT NULL,
account_created text NOT NULL
);