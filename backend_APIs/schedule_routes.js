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


  app.get('/api/getDeviceSchedule/:aromeo_id', function(req, result, next) {
    pool.connect(function(err, client, done) {
      if(err) { return console.error('error fetching client from pool', err); }

      client.query('SELECT schedule_name, strength, timeslots FROM deviceScheduling WHERE aromeo_id = $1', [req.params.aromeo_id], function(err, res) {
        if(err) { done(err); return console.error('error running query', err); }
      }).on('end', (res) => {
        return result.json(res.rows);
        done();
      });
    });
  });

//   app.get('/api/resetSchedule/:aromeo_id', function(req, res, next) {

//   })

//   app.post('/api/modifySchedule/', function(req, res, next) {

//   })
}

module.exports.init = init;
