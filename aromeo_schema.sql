DROP TABLE if exists oils cascade;
DROP TABLE if exists aromeos cascade;
DROP TABLE if exists blends cascade;
DROP TABLE if exists deviceoils cascade;
DROP TABLE if exists schedules cascade;
DROP TABLE if exists customschedules cascade;
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
  power_on BOOLEAN,
  diffusion_strength SMALLINT
);

CREATE TABLE blends (
  blend_id SERIAL PRIMARY KEY,
  hotel_id INTEGER,
  blend_name TEXT,
  description TEXT,
  oils JSON[]
);

CREATE TABLE deviceOils (
  hotel_id INTEGER,
  aromeo_id TEXT,
  oil_product_id INTEGER,
  oil_position SMALLINT,
  oil_quantity SMALLINT
);

CREATE TABLE schedules (
  schedule_id SERIAL PRIMARY KEY,
  hotel_id INTEGER,
  schedule_name VARCHAR(40),
  description TEXT,
  timeslots JSON[]
);

-- CREATE TABLE customSchedules (
--   schedule_id SERIAL PRIMARY KEY,
--   schedule_name VARCHAR(40),
--   timeslots JSON[]
-- );

CREATE TABLE deviceScheduling (
  aromeo_id TEXT,
  schedulingInfo JSON[]
--   schedule_id INTEGER
  --   isCustom BOOLEAN
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


-- CREATE TABLE hotel (
-- );
-- CREATE TABLE hotelManager (
-- );
-- CREATE TABLE order (
-- );
