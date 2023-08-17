DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id SERIAL,
  	name VARCHAR(50) UNIQUE,
  	sort BOOLEAN NOT NULL,
  	filter BOOLEAN NOT NULL,
  	PRIMARY KEY (id)
);
CREATE TABLE tasks(
	id SERIAL,
  	user_id INT NOT NULL,
  	value VARCHAR(255) NOT NULL,
  	due_date DATE NOT NULL,
  	status BOOLEAN NOT NULL,
  	PRIMARY KEY (id),
  	FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users(name, sort, filter) VALUES ('Ana', FALSE, FALSE);
INSERT INTO users(name, sort, filter) VALUES ('Bia', TRUE, FALSE);
INSERT INTO users(name, sort, filter) VALUES ('Ines', FALSE, TRUE);
SELECT * FROM users;

INSERT INTO tasks(user_id, value, due_date, status) VALUES (1, 'Call Dad', '2023-09-15', FALSE);
INSERT INTO tasks(user_id, value, due_date, status) VALUES (2, 'Call Dad', '2023-09-15', FALSE);
INSERT INTO tasks(user_id, value, due_date, status) VALUES (3, 'Call Dad', '2023-09-15', FALSE);
INSERT INTO tasks(user_id, value, due_date, status) VALUES (2, 'Call Mom', '2023-09-15', FALSE);
INSERT INTO tasks(user_id, value, due_date, status) VALUES (3, 'Call Mom', '2023-09-15', FALSE);
SELECT * FROM tasks;


UPDATE tasks SET value='after edita', status=true WHERE id=12 RETURNING id, user_id, value, due_date, status

SELECT * FROM tasks WHERE user_id = 1;