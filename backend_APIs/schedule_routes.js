var pg = require('pg');

var init = function(app, pool) {
  /*****************Schedule*****************/
  app.post('/api/createSchedule', function(req, result, next) {
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('INSERT INTO schedules(hotel_id, schedule_name, description, timeslots) values($1, $2, $3, $4) RETURNING *',
        [req.body.hotel_id, req.body.schedule_name, req.body.description, req.body.timeslots], function(err, res){
          if(err) {
            done(err);
            return console.error('error running query', err);
          }else{
            console.log(res.rows[0]);
            result.send(res.rows[0]);
          }
        });
    });
  });



  app.get('/api/getAllSchedules', function(req, result, next) {
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('SELECT * FROM schedules', [], function(err, res) {
        if(err) {
          done(err);
          return console.error('error running query', err);
        }
      }).on('end', (res) => {
        return result.json(res.rows);
        done();
      });
    });
  });

  app.get('/api/deleteSchedule/:scheduleID', function(req, result, next) {
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('DELETE FROM schedules WHERE schedule_id = $1 RETURNING schedule_name',
        [req.params.scheduleID], function(err, res){
          if(err) {
            done(err);
            return console.error('error running query', err);
          }
        }).on('end', (res) => {
          console.log("Successfully deleted " + res.rows[0].schedule_name);
          result.send(res.rows[0].schedule_name);
          done();
        });
    });
  });

  /*****************Aromeo Scheduling *****************/
  // by chloe
  app.put('/api/updateAromeoSchedule/:schedule_id', function(req, result, next) {
    pool.connect(function(err, client, done) {
      if(err) {
        // console.log('error1');
        return console.error('error fetching client from pool', err);
      }
      client.query('UPDATE aromeos SET schedule_id = $1',
        [req.params.schedule_id], function(err, res) {
          if(err) {
            // console.log('error2');
            done(err);
            return console.error('error running query', err);
          }
        }).on('end', (res) => {
          result.send('update aromeo schedule successfully');
          // console.log(result);
          done();
        });
    });
  });
  

  app.put('/api/updateAromeoPowerOn/:power_on', function(req, result, next) {
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('UPDATE aromeos SET power_on = $1',
        [req.params.power_on], function(err, res) {
          if(err) {
            done(err);
            return console.error('error running query', err);
          }
        }).on('end', (res) => {
          result.send('turn on aromeo successfully');
          done();
        });
    });
  }); 
  // done


  // TODO For Murcul - GET /devices/:deviceId/schedules
  app.get('/api/getDeviceSchedule/:aromeo_id', function(req, result, next) {
    pool.connect(function(err, client, done) {
      if(err) { return console.error('error fetching client from pool', err); }

      client.query('SELECT * FROM aromeos WHERE aromeo_id = $1', [req.params.aromeo_id], function(err, res) {
        if(err) { done(err); return console.error('error running query', err); }
      }).on('end', (res) => {
        client.query('SELECT * FROM timeslots WHERE timeslot_id = ANY (($1)::int[])', [res.rows[0].timeslot_ids],
            function(err, res2) {
              if(err) { done(err); return console.error('error running query', err); }
              else{
                res.rows.forEach(function(row){
                  row['timeslot'] = res2.rows;
                  delete row['timeslot_ids']
                })
                return result.json(res.rows);
              }
            })
        done();
      });
    });
  });

  app.post('/api/createSchedule', function(req, result, next) {
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('INSERT INTO schedules(hotel_id, schedule_name, description, timeslots) values($1, $2, $3, $4) RETURNING *',
          [req.body.hotel_id, req.body.schedule_name, req.body.description, req.body.timeslots], function(err, res){
            if(err) {
              done(err);
              return console.error('error running query', err);
            }else{
              console.log(res.rows[0]);
              result.send(res.rows[0]);
            }
          });
    });
  });

  // TODO For Murcul - POST /devices/:deviceId/schedules
  app.post('/api/updateDeviceSchedule/', function(req, result, next) {
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('WITH ROWS AS (INSERT INTO timeslots (blend_id,start_time,duration,is_custom)' +
          'VALUES ($1, $2, $3, TRUE) RETURNING timeslot_id)' +
          'UPDATE aromeos SET timeslot_ids = array_replace(timeslot_ids, $4, (SELECT timeslot_id FROM rows)) ' +
          'WHERE aromeo_id=$5 RETURNING (SELECT timeslot_id FROM rows);',
          [req.body.blend_id, req.body.start_time, req.body.duration, req.body.timeslot_id, req.body.aromeo_id], function(err, res){
            if(err) {
              done(err);
              return console.error('error running query', err);
            }else{
              var returnArr = Object.assign({},req.body);
              returnArr['timeslot_id'] = res.rows[0]['timeslot_id'];
              result.send(returnArr);
            }
          });
    });
  });

}

module.exports.init = init;
