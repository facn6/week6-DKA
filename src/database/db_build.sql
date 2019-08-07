BEGIN;

DROP TABLE IF EXISTS event CASCADE;
DROP TABLE IF EXISTS category CASCADE;
DROP TABLE IF EXISTS location CASCADE;


CREATE TABLE event (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
description VARCHAR(500),
event_date DATE,
interested int,
category_id int,
location_id int
);

CREATE TABLE category (
id SERIAL PRIMARY KEY,
category_name varchar(100) NOT NULL
);

CREATE TABLE location (
id SERIAL PRIMARY KEY,
location_name VARCHAR(100) NOT NULL
);




INSERT INTO category(category_name) VALUES
('meeting'),
('popular'),
('research'),
('presentation'),
('workshop');


COMMIT;
