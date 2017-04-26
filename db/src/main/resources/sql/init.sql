CREATE TABLE daylist (
	id INTEGER PRIMARY KEY,
	title VARCHAR(32)
);

INSERT INTO daylist("id", "title") VALUES (1, 'Semaine 42');

CREATE TABLE day (
	id INTEGER PRIMARY KEY,
	name VARCHAR(16),
	daylist INTEGER NOT NULL,
	FOREIGN KEY (daylist) REFERENCES daylist
); 

INSERT INTO day("id", "name", "daylist") VALUES (1, 'Samedi', 1);
