var pg = require('pg');

var init = function(app, pool) {
  /*****************Schedule*****************/
  app.post('/api/createSchedule', function(req, res, next) {

    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }

      // 1. Create timeslot
      client.query('INSERT INTO timeslot(blend_id, start_time, duration, isCustom) values($1, $2, $3, $4) RETURNING timeslot_id',
        [req.body.blend_id, req.body.start_time, req.body.duration, req.body.isCustom], function(err, res){
          if(err) {
            done(err);
            return console.error('error running query', err);
          }
        }).on('end', (res) => {
          // 2. Create Schedule with the created timeslot
          console.log(res.rows[0].timeslot_id)
          client.query('INSERT INTO schedule(hotel_id, timeslot_id, schedule_name) values($1, $2, $3)',
            [req.body.hotel_id, res.rows[0].timeslot_id, req.body.schedule_name])
          done();
        });
    });
  })

  // TODO Q: if we delete a schedule, should it also be deletected from all the devices?
  app.get('/api/deleteSchedule/:scheduleID', function(req, res, next) {
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }

      // 1. delete schedule and obtain timeslot id
      client.query('DELETE FROM schedule WHERE schedule_id = $1 RETURNING timeslot_id',
        [req.params.scheduleID], function(err, res){
          if(err) {
            done(err);
            return console.error('error running query', err);
          }
        }).on('end', (res) => {
          console.log(res.rows[0].timeslot_id)
          // 2. delete corresponding timeslot
          client.query('DELETE FROM timeslot WHERE timeslot_id = $1',
            [res.rows[0].timeslot_id])
          done();
        });
    });
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
