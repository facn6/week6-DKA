BEGIN;
DROP TABLE IF EXISTS event CASCADE;

-- CREATE TABLE event (
-- id SERIAL PRIMARY KEY,
-- name VARCHAR (100),
-- location VARCHAR (100),
-- description VARCHAR (100),
-- eventDate DATE,
-- interested int,
-- category VARCHAR(100),
-- );

DROP TABLE IF EXISTS event CASCADE;


CREATE TABLE event (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
description VARCHAR(500),
eventDate DATE,
interested int,
category VARCHAR,
location VARCHAR
);


INSERT INTO event(name, category, location) VALUES
('meeting', 'telaviv', 'fun'),
('party', 'nazareth', 'boring'),
('research', 'smea', 'shit'),
('presentation', 'harutzim', 'good'),
('workshop', 'paris','nice');

-- INSERT INTO event(location) VALUES
-- ('TelAviv'),
-- ('Nazareth'),
-- ('Smea'),
-- ('Harutzim'),
-- ('Paris');
-- --
-- INSERT INTO event(description) VALUES
-- ('fun'),
-- (

-- INSERT INTO event(eventDate) VALUES
-- ('2019-08-15'),
-- ('2019-08-16'),
-- ('2019-06-15'),
-- ('2019-07-15'),
-- ('2019-10-11');
--
-- INSERT INTO event(interested) VALUES
-- (1),
-- (5),
-- (1),
-- (3),
-- (22);
--
-- INSERT INTO event(category) VALUES
-- ('party'),
-- ('something'),
-- ('Smea'),
-- ('Harutzim'),
-- ('Paris');

COMMIT;
