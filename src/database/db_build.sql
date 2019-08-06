BEGIN;
CREATE TABLE "event" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "description" TEXT,
  "date" DATE,
  "interested" int,
  "category_id" int,
  "location_id" int
);

CREATE TABLE "category" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL
);

CREATE TABLE "location" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL
);


INSERT INTO category(name) VALUES
('meeting'),
('party'),
('research'),
('presentation'),
('workshop');


ALTER TABLE "event" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");

ALTER TABLE "event" ADD FOREIGN KEY ("location_id") REFERENCES "location" ("id");

COMMIT;