BEGIN;

DROP TABLE IF EXISTS events CASCADE;

CREATE TABLE events (
id SERIAL PRIMARY KEY,
event_name  VARCHAR(100),
event_description VARCHAR(500) ,
event_date DATE ,
interested BOOLEAN,
category VARCHAR(100) ,
event_location VARCHAR(100)
);


COMMIT;