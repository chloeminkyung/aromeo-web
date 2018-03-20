var pg = require('pg');

var init = function(app, pool) {
  /*****************Oil***************/
  // TODO Murcul - GET /oils
  app.get('/api/getOilSet/:oilSetID', function(req, result, response) {
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('SELECT * FROM oils WHERE oil_product_id = ANY ((SELECT oils FROM oilSets WHERE oilSet_id = $1)::int[])',
          [req.params.oilSetID], function(err, res) {
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

  app.get('/api/testing_1', function(req, result, response) {
    console.log("testing worked");
    return result.send("Add Oil Product");
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
  app.post('/api/createBlend', function(req, result, next) {
    console.log(req.body)
    pool.query('INSERT INTO blends(hotel_id, blend_name, description, oils, oils_encoded) values($1, $2, $3, $4, $5) RETURNING *',
    [req.body.hotel_id, req.body.blend_name, req.body.description, req.body.oils, req.body.oils_encoded], function(err, res){
          if(err) {
            // done(err);
            return console.error('error running query', err);
          }else{
            console.log(res.rows[0]);
            result.send(res.rows[0]);
          }
        });
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

  // TODO Murcul - GET /blends
  app.get('/api/getAllBlends/:hotelID', function(req, result, next) {
    console.log("get all blends of " +req.params.hotelID)
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('SELECT * FROM blends WHERE hotel_id = $1', [req.params.hotelID], function(err, res) {
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
      client.query('DELETE FROM blends WHERE blend_id = $1 RETURNING blend_name;', [req.params.blendId], function(err, res) {
        if(err) {
          done(err);
          return console.error('error running query', err);
        }
      }).on('end', (res) => {
        return result.json(res.rows[0].blend_name);
        done();
      });
    });
  })
}

module.exports.init = init;
