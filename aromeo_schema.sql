DROP TABLE if exists oils cascade;
DROP TABLE if exists aromeos cascade;
DROP TABLE if exists blends cascade;
DROP TABLE if exists deviceOil cascade;
DROP TABLE if exists schedule cascade;
DROP TABLE if exists timeslot cascade;
DROP TABLE if exists deviceScheduling cascade;
-- DROP TABLE if exists hotel cascade;
-- DROP TABLE if exists hotelManager cascade;
-- DROP TABLE if exists order cascade;

CREATE TABLE oils (
  oil_product_id SERIAL PRIMARY KEY,
  name VARCHAR(40) not null,
  botanical_name TEXT not null,
  origin VARCHAR(40),
  description TEXT,
  uses TEXT,
  olfactive_family SMALLINT,
  cautions json
);

CREATE TABLE aromeos (
  hotel_id INTEGER,
  aromeo_id TEXT,
  name TEXT,
  power_on BOOLEAN
);

CREATE TABLE blends (
  blend_id SERIAL PRIMARY KEY,
  hotel_id INTEGER,
  blend_name TEXT,
  description TEXT,
  oils JSON[]
);

CREATE TABLE deviceOil (
  hotel_id INTEGER,
  aromeo_id TEXT,
  oil_product_id INTEGER,
  power_status BOOLEAN,
  oil_position SMALLINT,
  oil_quantity SMALLINT
);

CREATE TABLE schedule (
  schedule_id SERIAL PRIMARY KEY,
  hotel_id INTEGER,
  schedule_name VARCHAR(40),
  description TEXT,
  timeslots JSON[]
);

CREATE TABLE customSchedule (
  schedule_id SERIAL PRIMARY KEY,
  schedule_name VARCHAR(40),
  timeslots JSON[]
);

-- CREATE TABLE timeslot (
--   schedule_id INTEGER,
--   blend_id INTEGER,
--   start_time TIME,
--   duration SMALLINT
-- );
--
-- CREATE TABLE customTimeslot (
--   schedule_id INTEGER,
--   blend_id INTEGER,
--   start_time TIME,
--   duration SMALLINT
-- );

CREATE TABLE deviceScheduling (
  aromeo_id TEXT,
  schedule_id INTEGER,
  repeatability BOOLEAN,
  strength SMALLINT,
  isCustom BOOLEAN
);

-- CREATE TABLE hotel (
-- );
-- CREATE TABLE hotelManager (
-- );
-- CREATE TABLE order (
-- );
