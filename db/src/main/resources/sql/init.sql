CREATE TABLE daylist (
	id BIGINT PRIMARY KEY,
	title VARCHAR(32)
);

INSERT INTO daylist("id", "title")
VALUES
	(1, 'Semaine 42'),
	(2, 'Semaine 43');

CREATE TABLE day (
	id BIGINT PRIMARY KEY,
	name VARCHAR(16),
	day_list_id BIGINT NOT NULL,
	FOREIGN KEY (day_list_id) REFERENCES daylist
); 

INSERT INTO day("id", "name", "day_list_id")
VALUES
	(1, 'Samedi', 1),
	(2, 'Dimanche', 1),
	(3, 'Lundi', 1),
	(4, 'Samedi', 2),
	(5, 'Dimanche', 2),
	(6, 'Lundi', 2);
