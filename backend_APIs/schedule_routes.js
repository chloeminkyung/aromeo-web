var pg = require('pg');

var init = function(app, pool) {
  /*****************Schedule*****************/
  app.post('/api/createSchedule', function(req, res, next) {

    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }

      client.query('INSERT INTO schedules(hotel_id, schedule_name, description, timeslots) values($1, $2, $3, $4) RETURNING schedule_name',
        [req.body.hotel_id, req.body.schedule_name, req.body.description, req.body.timeslots], function(err, res){
          if(err) {
            done(err);
            return console.error('error running query', err);
          }
        }).on('end', (res) => {
          console.log("Successfully created " + res.rows[0].schedule_name + " schedule");
          done();
        });
    });
  })

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
  })

  app.get('/api/deleteSchedule/:scheduleID', function(req, res, next) {
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }

      // 1. delete schedule and obtain timeslot id
      client.query('DELETE FROM schedules WHERE schedule_id = $1 RETURNING schedule_name',
        [req.params.scheduleID], function(err, res){
          if(err) {
            done(err);
            return console.error('error running query', err);
          }
        }).on('end', (res) => {
          console.log("Successfully deleted " + res.rows[0].schedule_name);
          done();
        });
    });
    res.send("Done");
  })

  /*****************Aromeo Scheduling *****************/
  app.post('/api/applyScheduleToOne', function(req, res, next) {
    pool.query('INSERT INTO deviceScheduling(aromeo_id, schedule_id, timeslot_id, repeatability, strength) values($1, $2, $3, $4, $5)',
    [req.body.aromeo_id, req.body.schedule_id, req.body.timeslot_id, req.body.repeatability, req.body.strength, {}]);
    res.send('Apply Schedule Successful!')
  })

  app.post('/api/applyScheduleToMany', function(req, res, next) {

  })

  app.get('/api/getDeviceSchedule/:aromeo_id', function(req, res, next) {

  })

  app.get('/api/resetSchedule/:aromeo_id', function(req, res, next) {

  })

  app.post('/api/modifySchedule/', function(req, res, next) {

  })
}

module.exports.init = init;
