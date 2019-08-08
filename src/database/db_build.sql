BEGIN;
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


INSERT INTO event(name, category, location, description, eventDate, interested) VALUES
('team meetup','meeting', 'telaviv', 'will be talking about the new project', '2019-08-15', 0),
('happy hour','activity', 'nazareth', 'free beer and snacks', '2019-09-23', 0),
('node.js','research', 'smea', 'getting to know node.js better', '2019-09-18', 0),
('present weekly projects','presentation', 'harutzim', 'please bring your laptops to cast', '2019-10-09', 0),
('react','workshop', 'haifa', 'hands-on react tutorial', '2019-10-12', 0);

COMMIT;