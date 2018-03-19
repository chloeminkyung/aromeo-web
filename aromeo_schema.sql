DROP TABLE if exists oils cascade;
DROP TABLE if exists aromeos cascade;
DROP TABLE if exists oilSets cascade;
-- DROP TABLE if exists deviceOils cascade;
DROP TABLE if exists blends cascade;
DROP TABLE if exists schedules cascade;
DROP TABLE if exists timeslots cascade;
DROP TABLE if exists hotelAccounts cascade;
-- DROP TABLE if exists hotelManagers cascade;

CREATE TABLE oils (
  oil_product_id SERIAL PRIMARY KEY,
  name VARCHAR(40) not null,
  botanical_name TEXT not null,
  uses TEXT,
  olfactive_family VARCHAR(40),
  description TEXT,
  cautions INTEGER[]  -- 1: young 2: pregnancy 3: respiratory patients
);

-- oilSets 은 order 용으로만 사용
CREATE TABLE oilSets (
	oilSet_id SERIAL PRIMARY KEY,
  oils INTEGER[]  -- oil_product_id array
);

-- CREATE TABLE deviceOils (
--   aromeo_id VARCHAR(40),
--   oil_quantity INTEGER[]
-- );

CREATE TABLE blends (
  blend_id SERIAL PRIMARY KEY,
  hotel_id SERIAL,
  blend_name TEXT,
  oilSet_id INTEGER,
  description TEXT,
  oils SMALLINT[] -- oil_drops
);

CREATE TABLE aromeos (
  aromeo_id VARCHAR(40) PRIMARY KEY,
  hotel_id INTEGER,
  name VARCHAR(40),
  power_on BOOLEAN,
  diffusion_strength SMALLINT,

  oilSet_id SERIAL,
  oil_quantity INTEGER[],

  -- default = NULL (no schedule set). When user choose schedule,
  -- these fields will be updated with the values from 'schedules' table.
  schedule_name VARCHAR(40),
  description TEXT,

  timeslot_ids INTEGER[], -- timeslots_ids will be modified, if timeslots get customized by hotel guests.
  check_out_date DATE -- until when to repeat applied schedule.
);

-- default schedules for each hotels. won't get deleted easily. reference schedule information that
-- will be used by multiple aromeos.
CREATE TABLE schedules (
  schedule_id SERIAL PRIMARY KEY,
  hotel_id INTEGER,
  schedule_name VARCHAR(40),
  description TEXT,
  timeslot_ids INTEGER[]
);

-- will have both default timeslots set by hotels, and temporary&custom timeslots modified by guests.
CREATE TABLE timeslots (
  timeslot_id SERIAL PRIMARY KEY,
  blend_id INTEGER,
  start_time TIME,
  duration INTEGER,
  is_custom BOOLEAN -- for identifying default vs custom.
);

CREATE TABLE hotelAccounts (
  hotel_id SERIAL PRIMARY KEY,
  hotel_username VARCHAR(40), -- hotel id
  hotel_password VARCHAR(25),
  hotel_name VARCHAR(40), -- for identifying hotels for aromeo
  hotel_email VARCHAR(60),
  address TEXT,
  telephone	VARCHAR(40),

  aromeoCount INTEGER,
  oilSet_ids INTEGER[]
);
  
-- CREATE TABLE hotelManagers (
--   manager_id SERIAL PRIMARY KEY,
--   manager_account VARCHAR(20),
--   password VARCHAR(25),
--   hotel_id INTEGER,
--   position INTEGER
-- );