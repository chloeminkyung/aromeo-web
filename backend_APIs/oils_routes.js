var pg = require('pg');

var init = function(app, pool) {
  /*****************Oil***************/
  app.get('/api/getAllOilProducts', function(req, result, response) {
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('SELECT * FROM oils', [], function(err, res) {
        //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
        if(err) {
          done(err);
          return console.error('error running query', err);
        }
      }).on('end', (res) => {
        done();
        return result.json(res.rows);
      });
    });
  })
  app.post('/api/addOilProduct', function(req, res, next) {
    pool.query('INSERT INTO oils(name, botanical_name, origin, description, uses, olfactive_family, cautions) values($1, $2, $3, $4, $5, $6, $7)',
    [req.body.name, req.body.botanical_name, req.body.origin, req.body.description, req.body.uses, req.body.olfactive_family, req.body.cautions],
    function(err, res) {
      if(err) {
        return console.error('error running query', err);
      }
    });
    return res.send("Add Oil Product");
  })

  /*****************Blend*****************/
  app.post('/api/createBlend', function(req, res, next) {
    pool.query('INSERT INTO blends(hotel_id, blend_name, description, oils, oils_encoded) values($1, $2, $3, $4, $5)',
    [req.body.hotel_id, req.body.blend_name, req.body.description, req.body.oils, req.body.oils_encoded ]);
    res.send(req.body);
  })

  app.get('/api/getBlend/:blendID', function(req, result, next) {
    console.log("blend ID is " + req.params.blendID);
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('SELECT * FROM blends WHERE blend_id = $1', [req.params.blendID], function(err, res) {
        if(err) {
          done(err);
          return console.error('error running query', err);
        }
      }).on('end', (res) => {
        done();
        return result.json(res.rows);
      });
    });
  })

  app.get('/api/getAllBlends', function(req, result, next) {
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('SELECT * FROM blends', [], function(err, res) {
        if(err) {
          done(err);
          return console.error('error running query', err);
        }
      }).on('end', (res) => {
        return result.json(res.rows);
        done();
      });
    });
  })

  app.get('/api/deleteBlend/:blendId', function(req, result, next) {
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('DELETE FROM blends WHERE blend_id = $1;', [req.params.blendId], function(err, res) {
        if(err) {
          done(err);
          return console.error('error running query', err);
        }
      }).on('end', (res) => {
        return result.json(res.rows);
        done();
      });
    });
  })
}

module.exports.init = init;
