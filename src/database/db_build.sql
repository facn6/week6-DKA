BEGIN;
CREATE TABLE "event" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(100) NOT NULL,
"description" TEXT(500),
"date" DATE,
"interested" int,
"category_id" int,
"location_id" int
);

CREATE TABLE "category" (
"id" SERIAL PRIMARY KEY,
"name" varchar(100) NOT NULL
);

CREATE TABLE "location" (
"id" SERIAL PRIMARY KEY,
"name" varchar(100) NOT NULL
);




INSERT INTO category(name) VALUES
('meeting'),
('party'),
('research'),
('presentation'),
('workshop');


COMMIT;
