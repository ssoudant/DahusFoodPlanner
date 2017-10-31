CREATE TABLE daylist (
	id BIGINT PRIMARY KEY,
	title VARCHAR(32)
);

INSERT INTO daylist("id", "title") VALUES (1, 'Semaine 42');

CREATE TABLE day (
	id BIGINT PRIMARY KEY,
	name VARCHAR(16),
	day_list_id BIGINT NOT NULL,
	FOREIGN KEY (day_list_id) REFERENCES daylist
); 

INSERT INTO day("id", "name", "day_list_id") VALUES (1, 'Samedi', 1);
