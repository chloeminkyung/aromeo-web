DROP TABLE if exists oils cascade;
DROP TABLE if exists cautions cascade;
DROP TABLE if exists aromeos cascade;
DROP TABLE if exists oilSets cascade;
DROP TABLE if exists deviceOils cascade;
DROP TABLE if exists blends cascade;
DROP TABLE if exists schedules cascade;
DROP TABLE if exists timeslots cascade;
DROP TABLE if exists accounts cascade;
DROP TABLE if exists hotelManagers cascade;

CREATE TABLE oils (
  oil_product_id SERIAL,
  name VARCHAR(40) not null,
  botanical_name TEXT not null,
  uses TEXT,
  olfactive_family VARCHAR(40),
  description TEXT,
  cautions INTEGER[]
);

CREATE TABLE cautions (
  caution_id SERIAL PRIMARY KEY,
  caution_name VARCHAR(40) not null,
  applicable BOOLEAN
);

CREATE TABLE oilSets (
	oilSet_id SERIAL PRIMARY KEY,
  oils INTEGER[]
);

CREATE TABLE deviceOils (
  aromeo_id VARCHAR(40),
  oil_quantity INTEGER[]
);

CREATE TABLE blends (
  blend_id SERIAL PRIMARY KEY,
  hotel_id SERIAL,
  blend_name TEXT,
  oilSet_id INTEGER,
  description TEXT,
  oils SMALLINT[]
);

CREATE TABLE aromeos (
  aromeo_id VARCHAR(40) PRIMARY KEY,
  hotel_id INTEGER,
  name VARCHAR(40),
  power_on BOOLEAN,
  diffusion_strength SMALLINT,

  schedule_name VARCHAR(40),
  description TEXT,

  timeslot_ids INTEGER[],
  check_out_date DATE
);

CREATE TABLE schedules (
  schedule_id SERIAL PRIMARY KEY,
  hotel_id INTEGER,
  schedule_name VARCHAR(40),
  description TEXT,
  timeslot_ids INTEGER[]
);

CREATE TABLE timeslots (
  timeslot_id SERIAL PRIMARY KEY,
  blend_id INTEGER,
  start_time TIME,
  duration INTEGER,
  is_custom BOOLEAN
);

CREATE TABLE hotelAccounts (
  hotel_id SERIAL PRIMARY KEY,
  hotel_username VARCHAR(40),
  hotel_password VARCHAR(25),
  hotel_name VARCHAR(40),
  hotel_email VARCHAR(60),
  address TEXT,
  telephone	VARCHAR(40),

  aromeoCount INTEGER
);

CREATE TABLE hotelManagers (
  manager_id SERIAL PRIMARY KEY,
  manager_account VARCHAR(20),
  password VARCHAR(25),
  hotel_id INTEGER,
  position INTEGER
);

INSERT INTO oils (name, botanical_name,uses, olfactive_family, description, cautions)
VALUES
  ('Chamomile', 'Anthemis nobilis', 'Bright, crisp, sweet, fruity, herbaceous.',
  'herbal', 'Abscesses, allergies, arthritis, boils, colic, cuts, cystitis, dermatitis, dysmenorrhea, earache, flatulence, hair, headache, inflamed skin, insect bites, insomnia, nausea, neuralgia, PMS, rheumatism, sores, sprains, strains, stress, wounds.', NULL),
  ('Cypress', 'Cupressus sempervirens', 'Fresh, herbaceous, slightly woody, evergreen aroma', 'woody',
  'Excessive perspiration, hemorrhoids, menorrhagia, oily skin, rheumatism, vericse veins.', NULL),
  ('Lavender', 'Cupressus sempervirens', 'Fresh, herbaceous, slightly woody, evergreen aroma', 'woody',
      'Excessive perspiration, hemorrhoids, menorrhagia, oily skin, rheumatism, vericse veins.', NULL),
  ('Lemon', 'Cupressus sempervirens', 'Fresh, herbaceous, slightly woody, evergreen aroma', 'woody',
      'Excessive perspiration, hemorrhoids, menorrhagia, oily skin, rheumatism, vericse veins.', NULL),
  ('YlangYlang', 'Cupressus sempervirens', 'Fresh, herbaceous, slightly woody, evergreen aroma', 'woody',
   'Excessive perspiration, hemorrhoids, menorrhagia, oily skin, rheumatism, vericse veins.', NULL);

INSERT INTO blends (hotel_id,blend_name,oilSet_id,description,oils)
VALUES
  (1, 'Calming Blend', 1, 'Helpful for stress relief and relaxiation', '{2,2,0,0,1}'),
  (1, 'Focus Blend', 1, 'Helpful for concentration. Boost up work efficiency', '{0,1,2,0,1}'),
  (1, 'Waking Blend', 1, 'Helpful for refreshing morning', '{0,1,2,0,1}');


INSERT INTO aromeos (aromeo_id,hotel_id,name,power_on,diffusion_strength,schedule_name,description,timeslot_ids,check_out_date)
  VALUES
    (1, 1, '501', TRUE, 2, 'Business Schedule', 'For business people who needs to work and rest well', '{1,2,3}', '2018-02-24'),
    (2, 1, '1001', FALSE, 2, NULL, NULL, NULL, NULL);

INSERT INTO schedules (hotel_id,schedule_name,description, timeslot_ids)
VALUES
  (1, 'Business Schedule', 'For business people who needs to work and rest well', '{1,2,3}');

INSERT INTO timeslots (blend_id,start_time,duration,is_custom)
VALUES
  (3, '8:30', 60, FALSE),
  (2, '18:00', 45, FALSE),
  (1, '23:30', 60, FALSE);

INSERT INTO oilSets (oils)
    VALUES
      ('{2,1,4,3,5}')