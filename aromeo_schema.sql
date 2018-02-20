DROP TABLE if exists oils cascade;
DROP TABLE if exists cautions cascade;
DROP TABLE if exists aromeos cascade;
DROP TABLE if exists oilSets cascade; -- added
DROP TABLE if exists deviceOils cascade;
DROP TABLE if exists blends cascade;
DROP TABLE if exists schedules cascade;
DROP TABLE if exists timeslots cascade;
DROP TABLE if exists accounts cascade; -- added
DROP TABLE if exists hotelManagers cascade;

CREATE TABLE oils (
  oil_product_id SERIAL PRIMARY KEY,
  name VARCHAR(40) not null,
  botanical_name TEXT not null,
  origin VARCHAR(40),
  uses TEXT,
  olfactive_family SMALLINT,
  description TEXT,
  cautions INTEGER[]
);

CREATE TABLE cautions (
  caution_id SERIAL PRIMARY KEY,
  caution_name VARCHAR(40) not null,
  applicable BOOLEAN
);

CREATE TABLE aromeos (
  account_id INTEGER,
  aromeo_id VARCHAR(40),
  name VARCHAR(40),
  power_on BOOLEAN,
  diffusion_strength SMALLINT,
  schedule_id INTEGER
);

CREATE TABLE oilSets (
	oilSet_id SERIAL PRIMARY KEY,
  oils INTEGER[]
);

CREATE TABLE deviceOils (
  aromeo_id VARCHAR(40),
  oil_position SMALLINT,
  -- oil_quantity INTEGER  -- ?
);

CREATE TABLE blends (
  blend_id SERIAL PRIMARY KEY,
  blend_name TEXT,
  description TEXT,
  oilSet_id INTEGER,
  oilPortion SMALLINT[],
  -- oils INTEGER[],
  -- oils_encoded SMALLINT[] -- ?
);

CREATE TABLE schedules (
  schedule_id SERIAL PRIMARY KEY,
  account_id INTEGER,
  schedule_name VARCHAR(40),
  description TEXT,
  isCustom BOOLEAN,
  timeslot_ids INTEGER[]
);

CREATE TABLE timeslots (
  timeslot_id SERIAL PRIMARY KEY,
  account_id INTEGER,
  blend_id INTEGER,
  start_time TIME,
  duration TIME,	-- time or smallint ?
  isCustom BOOLEAN
);

CREATE TABLE accounts (
  account_id SERIAL PRIMARY KEY,
  account_name VARCHAR(40),
  isPersonal BOOLEAN,
  address TEXT,
  telephone	VARCHAR(40),
  aromeoCount INTEGER,
  oilSet_id INTEGER,
  password VARCHAR(15),
  name VARCHAR(40)
);
  
CREATE TABLE hotelManagers (
  manager_id SERIAL PRIMARY KEY,
  manager_account VARCHAR(20),
  -- password
  account_id INTEGER,
  position INTEGER
);
  

-- CREATE TABLE order (
-- );
