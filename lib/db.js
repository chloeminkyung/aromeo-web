const pg = require('pg');
const RUNNING_ON_LOCAL = true;

var heroku_config = {
  user: 'zyscganbiltxhv', //env var: PGUSER
  database: 'd6tjqkgq5t6ig7', //env var: PGDATABASE
  password: '8354febd7a10480486b81b3ff3d6f7d7e76864303ad890e2c9c1b2a540642dce', //env var: PGPASSWORD
  host: 'ec2-23-21-246-11.compute-1.amazonaws.com', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  ssl: true
};
var localhost_config = {
  database: 'aromeo', //env var: PGDATABASE
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  ssl: false
}
/*
  heroku - postgres://zyscganbiltxhv:8354febd7a10480486b81b3ff3d6f7d7e76864303ad890e2c9c1b2a540642dce@ec2-23-21-246-11.compute-1.amazonaws.com:5432/d6tjqkgq5t6ig7
  localhost - postgres://localhost:5432/aromeo
*/

var config;
if(RUNNING_ON_LOCAL){
  config = localhost_config
}else{
  config = heroku_config
}

//this initializes a connection pool
//it will keep idle connections open for 30 seconds
//and set a limit of maximum 10 idle clients
const pool = new pg.Pool(config);

pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack);
});

//export the query method for passing queries to the pool
module.exports.query = function (text, values, callback) {
  console.log('query:', text, values);
  return pool.query(text, values, callback);
};

// the pool also supports checking out a client for
// multiple operations, such as a transaction
module.exports.connect = function (callback) {
  return pool.connect(callback);
};
